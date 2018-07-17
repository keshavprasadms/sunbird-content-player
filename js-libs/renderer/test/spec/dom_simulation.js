var contentBody = JSON.parse('{"theme":{"stage":[{"text":{"strokeWidth":1,"rotate":0,"z-index":0,"editable":false,"h":5.02,"fontsize":48,"weight":"","minWidth":20,"textType":"text","fill":"#000000","fontStyle":"normal","stroke":"rgba(255, 255, 255, 0)","w":35,"x":10.28,"y":20.49,"lineHeight":1.3,"id":"text","opacity":1,"fontWeight":"normal","maxWidth":500,"font":"NotoSans","__text":"You Speak"},"shape":{"hitArea":"true","type":"circle","y":"15","w":"5","h":"5","radius":"5","fill":"blue","stroke":"black","strokeWidth":1,"rotate":0,"z-index":1,"id":"shape","opacity":1},"htext":[{"event":{"action":{"type":"command","command":"play","asset":"ht1"},"type":"click"},"id":"ht1","x":6.11,"y":87.16,"w":35,"h":5.02,"highlight":"rgba(255,0,0,0.5)","fontsize":"1.2em","timings":"250,400,650,1000,1300,1500,1900,2300,2500,3000,3500,4200","__text":"This is rani family."},{"event":{"action":{"type":"command","command":"play","asset":"ht2"},"type":"click"},"id":"ht2","x":12.11,"y":80.16,"w":35,"h":5.02,"highlight":"rgba(255,0,0,0.5)","fontsize":"1.2em","timings":"250,400,650,1000,1300,1500,1900,2300,2500,3000,3500,4200","audio":"do_2123843431567933441477","__text":"This is rani family."}],"image":{"event":{"action":{"tween":{"to":[{"ease":"linear","duration":500,"__cdata":{"x":20,"y":20}},{"ease":"quadOut","duration":2000,"__cdata":{"x":55,"y":0}},{"ease":"linear","duration":1,"__cdata":{"x":75,"y":0,"scaleX":-1}},{"ease":"linear","duration":2000,"__cdata":{"x":40,"y":55}},{"ease":"linear","duration":1,"__cdata":{"x":18,"y":55,"scaleX":1}},{"ease":"linear","duration":2000,"__cdata":{"x":57,"y":55}}],"id":"imageTween"},"type":"command","command":"animate"},"type":"click"},"rotate":0,"z-index":2,"w":12.45,"x":31.79,"h":42.7,"y":8.88,"id":"do_2122479583895552001118_tween","asset":"do_2122479583895552001118"},"audio":{"z-index":4,"id":"audio","asset":"do_2123843431567933441477"},"hotspot":{"strokeWidth":1,"rotate":0,"z-index":3,"h":25,"type":"roundrect","fill":"rgb(255,0,0)","stroke":"rgba(255, 255, 255, 0)","w":15,"x":59.44,"y":13.83,"id":"hotspot","opacity":0.3},"embed":{"template":"item","var-item":"item"},"scribble":{"strokeWidth":2,"rotate":"4","z-index":4,"thickness":2,"h":32.74,"type":"roundrect","fill":"#3399FF","stroke":"rgba(255, 255, 255, 0)","w":14.71,"x":63.82,"y":54.66,"stroke-width":1,"id":"scribble","opacity":0.3},"manifest":{"media":[{"assetId":"do_2122479583895552001118"},{"assetId":"do_2123843431567933441477"},{"assetId":"video"},{"assetId":"sprite"},{"assetId":"sprite_image"}]},"x":0,"y":0,"w":100,"h":100,"id":"stage1","rotate":"","iterate":"assessment_mtf","var":"item"},{"manifest":{"media":[]},"x":0,"y":0,"w":100,"h":100,"id":"stage2","rotate":""}],"manifest":{"media":[{"src":"assets/public/content/image1.jpg","id":"no_image","type":"image"},{"src":"assets/public/content/image.jpg","id":"do_2122479583895552001118","type":"image"},{"src":"assets/public/content/audio.mp3","name":"audio 1510911260101 407 1510911274 1510911274761","id":"do_2123843431567933441477","type":"audio"},{"src":"assets/public/content/video.mp4","id":"video","type":"video"},{"src":"assets/public/content/spriteAnimation.json","id":"sprite","type":"json"},{"src":"assets/public/content/spriteImage.png","id":"sprite_image","type":"image"}]},"template":{"id":"mtf_template_test","text":[{"font":"Georgia","fontsize":"40","model":"item.title","marginY":"10","padX":"30","padY":"10","w":"70","h":"12","x":"15","y":"5","lineHeight":"1.2","align":"left"},{"font":"Georgia","fontsize":"60","model":"item.question","marginY":"10","padX":"30","padY":"10","w":"70","h":"12","x":"15","y":"12","lineHeight":"1.2"}],"mtf":{"model":"item","options":[{"cols":"8","layout":"table","x":"10","y":"20","w":"500","h":"30","padX":"20","padY":"10","options":"lhs_options","snapX":"55"},{"cols":"8","layout":"table","x":"10","y":"55","w":"80","h":"30","padX":"20","padY":"10","options":"rhs_options"}]}},"controller":{"name":"assessment_mtf","type":"items","id":"assessment_mtf","__cdata":{"identifier":"haircut_story_1","title":"Haircut Story Assessment","total_items":1,"shuffle":false,"showImmediateFeedback":true,"max_score":4,"subject":"LIT","feedback":[{"range":{"min":0,"max":100},"message":{"type":"text","asset":"assesment"}}],"item_sets":[{"id":"set_1","count":1}],"items":{"set_1":[{"identifier":"hs1_set_1_334","score":1,"type":"mtf","template":"mtf_template_test","qlevel":"MEDIUM","title":"Match the tools to the people.","lhs_options":[{"value":{"type":"image","asset":"do_2122479583895552001118","image":"do_2122479583895552001118","count":2},"index":0}],"rhs_options":[{"value":{"type":"text","asset":"do_2122479583895552001118","image":"do_2122479583895552001118"},"answer":0}],"max_score":1,"partial_scoring":true,"feedback":""}]}}},"plugin-manifest":"","compatibilityVersion":2,"id":"theme","version":1,"startStage":"stage1"}}');
function setUpRenderer() {
    var canvas = "<div ng-app='genie-canvas' id='gameArea'><div id='overlay'></div><canvas id='gameCanvas' style='top: 10px;left: 10px;position: absolute;'></canvas></div>";
    var body = document.getElementsByTagName("body")[0];
    var div = document.createElement('div');
    div.innerHTML = canvas;
    body.appendChild(div.children[0]);
    setGlobalConfig({'context': {}, 'config': {}});
    window.isMobile = window.cordova ? true : false;
    window.content = JSON.parse('{"baseDir":"/base/public/test/testContent", "path":"/base/public/test/testContent", "identifier": "org.ekstep.item.sample", "mimeType": "application/vnd.ekstep.ecml-archive", "name": "Content Preview ", "author": "EkStep", "localData": {"name": "Content Preview ", "loadingMessage": "Without requirements or design, programming is the art of adding bugs to an empty text file. ...", "identifier": "org.ekstep.item.sample" }, "pkgVersion": 1, "isAvailable": true}');
    window.content.body = JSON.parse(JSON.stringify(contentBody));
    org.ekstep.service.init();
    AppConfig.corePluginspath = '/public/coreplugins';
    org.ekstep.contentrenderer.initPlugins('', '/public/coreplugins');
    GlobalContext.game.id = packageName;
    GlobalContext.game.ver = version;
    startTelemetry(GlobalContext.game.id, GlobalContext.game.ver);
};

function startRenderer(data) {
    window.content.body = JSON.parse(JSON.stringify(data));
    Renderer.start("", "gameCanvas", {}, data);
}

setUpRenderer();
