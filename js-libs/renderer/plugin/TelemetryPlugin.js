/**
 * Plugin to create different shapes on canvas using createJS graphics object.
 * @class TelemetryPlugin
 * @extends EkstepRenderer.Plugin
 * @author Krushanu Mohapatra V S <Krushanu.Mohapatra@tarento.com>
 */
var TelemetryPlugin = Plugin.extend({

     /**
     * This explains the type of the plugin.
     * @member {String} _type.
     * @memberof TelemetryPlugin
     */
    _type: 'telemetry',

    /**
     * This explains plugin is container OR not.
     * @member {boolean} _isContainer
     * @memberof TelemetryPlugin
     */
    _isContainer: false,

    /**
     * This explains plugin should render on canvas OR not.
     * @member {boolean} _render
     * @memberof TelemetryPlugin
     */
    _render: true,

    /**
     * This is the telemetry data for the perticular stage.
     * @member {object} _teleData
     * @memberof TelemetryPlugin
     */
    _teleData: [],

    /**
     * A Constant for max telemetry data to send in one api call
     * @member {number} _maxTeleInstance
     * @memberof TelemetryPlugin
     **/
     _maxTeleInstance : 10,

     /**
     *   Invoked by framework when plugin instance created/renderered on stage.
     *   Use this plugin to create different shapes like Square, Circle, Rectangle, Polygon, Star etc..
     *   @param data {object} data is input object for the shape plugin.
     *   @memberof TelemetryPlugin
     *   @override
     */
    initPlugin: function(data) {
        console.log("Telemetry plugin init done !!!");
    },
    /*
     * generating global scope of the plugin. Called by plugin-fraemwork as the plugin loads.
     * this plugin instance will we available globally
     */
    initialize: function() {
        if ("undefined" == typeof cordova) {
            console.log("Telemetry plugin initialized !!!");
            this.registerTelemetryEvents();

            var did = detectClient();

            customPluginsConfig.context.sid = customPluginsConfig.context.sid || CryptoJS.MD5(JSON.stringify(Math.random(did))).toString();
            customPluginsConfig.context.uid = customPluginsConfig.context.uid || "anonymous";
            customPluginsConfig.context.did = customPluginsConfig.context.did || CryptoJS.MD5(JSON.stringify(did)).toString();

            this.callParentEvent();
        }
    },
    registerTelemetryEvents: function() {
        var instance = this;
        EventBus.addEventListener("telemetryEvent", function(data) {
            data = JSON.parse(data.target);

            data.sid = customPluginsConfig.context.sid;
            data.did = customPluginsConfig.context.did;
            data.uid = customPluginsConfig.context.uid;
            data.mid = 'OE_' + CryptoJS.MD5(JSON.stringify(data)).toString();

            instance._teleData.push(data);
            // instance._teleData.ts = "2017-03-28T05:43:03.478+0000",
            instance.generateTelemetryManifest();
        });
    },
    sendTelemetry: function(telemetryData) {
        var currentTimeStamp = new Date().getTime();
        var teleObj = {
            "id": "ekstep.telemetry",
            "ver": "2.0",
            "ets": currentTimeStamp,
            "events": telemetryData
        };
        // "events": JSON.parse(telemetryData)
        console.log("teleObj to send to api", teleObj);
        genieservice.sendTelemetry(teleObj).then(function(data) {
           console.log("Telemetry API success", data);
        });
    },
    generateTelemetryManifest: function() {
        if (this._teleData.length >= this._maxTeleInstance) {
            var telemetryData = _.clone(this._teleData);
            this.sendTelemetry(telemetryData);
            this._teleData = [];
        }
    },
    callParentEvent: function() {
        var instance = this;
        EventBus.addEventListener('sceneEnter', function() {
            if (instance.isPreviewInIframe()) {
                var retObj = {"stageId": EkstepRendererAPI.getCurrentStageId()};
                var custEvent = new CustomEvent("sceneEnter", {"detail": retObj});
                window.parent.dispatchEvent(custEvent);
            }
        });
    },
    isPreviewInIframe: function(){
        return (window.self != window.top) ? true : false;
    }
});
PluginManager.registerPlugin('telemetry', TelemetryPlugin);
