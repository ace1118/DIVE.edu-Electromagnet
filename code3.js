gdjs.DisclaimerCode = {};
gdjs.DisclaimerCode.GDBGObjects1= [];
gdjs.DisclaimerCode.GDBGObjects2= [];
gdjs.DisclaimerCode.GDLogoObjects1= [];
gdjs.DisclaimerCode.GDLogoObjects2= [];
gdjs.DisclaimerCode.GDHandObjects1= [];
gdjs.DisclaimerCode.GDHandObjects2= [];
gdjs.DisclaimerCode.GDHomeObjects1= [];
gdjs.DisclaimerCode.GDHomeObjects2= [];
gdjs.DisclaimerCode.GDRestartObjects1= [];
gdjs.DisclaimerCode.GDRestartObjects2= [];
gdjs.DisclaimerCode.GDLessonObjects1= [];
gdjs.DisclaimerCode.GDLessonObjects2= [];
gdjs.DisclaimerCode.GDBackObjects1= [];
gdjs.DisclaimerCode.GDBackObjects2= [];


gdjs.DisclaimerCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.DisclaimerCode.GDHomeObjects1);
{for(var i = 0, len = gdjs.DisclaimerCode.GDHomeObjects1.length ;i < len;++i) {
    gdjs.DisclaimerCode.GDHomeObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.DisclaimerCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DisclaimerCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.DisclaimerCode.GDHomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DisclaimerCode.GDHomeObjects1[k] = gdjs.DisclaimerCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.DisclaimerCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Front Page", false);
}}

}


};

gdjs.DisclaimerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DisclaimerCode.GDBGObjects1.length = 0;
gdjs.DisclaimerCode.GDBGObjects2.length = 0;
gdjs.DisclaimerCode.GDLogoObjects1.length = 0;
gdjs.DisclaimerCode.GDLogoObjects2.length = 0;
gdjs.DisclaimerCode.GDHandObjects1.length = 0;
gdjs.DisclaimerCode.GDHandObjects2.length = 0;
gdjs.DisclaimerCode.GDHomeObjects1.length = 0;
gdjs.DisclaimerCode.GDHomeObjects2.length = 0;
gdjs.DisclaimerCode.GDRestartObjects1.length = 0;
gdjs.DisclaimerCode.GDRestartObjects2.length = 0;
gdjs.DisclaimerCode.GDLessonObjects1.length = 0;
gdjs.DisclaimerCode.GDLessonObjects2.length = 0;
gdjs.DisclaimerCode.GDBackObjects1.length = 0;
gdjs.DisclaimerCode.GDBackObjects2.length = 0;

gdjs.DisclaimerCode.eventsList0(runtimeScene);

return;

}

gdjs['DisclaimerCode'] = gdjs.DisclaimerCode;
