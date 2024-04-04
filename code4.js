gdjs.aboutCode = {};
gdjs.aboutCode.GDBGObjects1= [];
gdjs.aboutCode.GDBGObjects2= [];
gdjs.aboutCode.GDLogoObjects1= [];
gdjs.aboutCode.GDLogoObjects2= [];
gdjs.aboutCode.GDHandObjects1= [];
gdjs.aboutCode.GDHandObjects2= [];
gdjs.aboutCode.GDHomeObjects1= [];
gdjs.aboutCode.GDHomeObjects2= [];
gdjs.aboutCode.GDRestartObjects1= [];
gdjs.aboutCode.GDRestartObjects2= [];
gdjs.aboutCode.GDLessonObjects1= [];
gdjs.aboutCode.GDLessonObjects2= [];
gdjs.aboutCode.GDBackObjects1= [];
gdjs.aboutCode.GDBackObjects2= [];


gdjs.aboutCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.aboutCode.GDHomeObjects1);
{for(var i = 0, len = gdjs.aboutCode.GDHomeObjects1.length ;i < len;++i) {
    gdjs.aboutCode.GDHomeObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.aboutCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.aboutCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.aboutCode.GDHomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.aboutCode.GDHomeObjects1[k] = gdjs.aboutCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.aboutCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Front Page", false);
}}

}


};

gdjs.aboutCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.aboutCode.GDBGObjects1.length = 0;
gdjs.aboutCode.GDBGObjects2.length = 0;
gdjs.aboutCode.GDLogoObjects1.length = 0;
gdjs.aboutCode.GDLogoObjects2.length = 0;
gdjs.aboutCode.GDHandObjects1.length = 0;
gdjs.aboutCode.GDHandObjects2.length = 0;
gdjs.aboutCode.GDHomeObjects1.length = 0;
gdjs.aboutCode.GDHomeObjects2.length = 0;
gdjs.aboutCode.GDRestartObjects1.length = 0;
gdjs.aboutCode.GDRestartObjects2.length = 0;
gdjs.aboutCode.GDLessonObjects1.length = 0;
gdjs.aboutCode.GDLessonObjects2.length = 0;
gdjs.aboutCode.GDBackObjects1.length = 0;
gdjs.aboutCode.GDBackObjects2.length = 0;

gdjs.aboutCode.eventsList0(runtimeScene);

return;

}

gdjs['aboutCode'] = gdjs.aboutCode;
