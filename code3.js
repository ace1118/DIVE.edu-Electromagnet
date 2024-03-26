gdjs.Reference_32DisclaimerCode = {};
gdjs.Reference_32DisclaimerCode.GDBGObjects1= [];
gdjs.Reference_32DisclaimerCode.GDBGObjects2= [];
gdjs.Reference_32DisclaimerCode.GDLogoObjects1= [];
gdjs.Reference_32DisclaimerCode.GDLogoObjects2= [];
gdjs.Reference_32DisclaimerCode.GDHandObjects1= [];
gdjs.Reference_32DisclaimerCode.GDHandObjects2= [];
gdjs.Reference_32DisclaimerCode.GDHomeObjects1= [];
gdjs.Reference_32DisclaimerCode.GDHomeObjects2= [];
gdjs.Reference_32DisclaimerCode.GDRestartObjects1= [];
gdjs.Reference_32DisclaimerCode.GDRestartObjects2= [];
gdjs.Reference_32DisclaimerCode.GDLessonObjects1= [];
gdjs.Reference_32DisclaimerCode.GDLessonObjects2= [];


gdjs.Reference_32DisclaimerCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.Reference_32DisclaimerCode.GDHomeObjects1);
{for(var i = 0, len = gdjs.Reference_32DisclaimerCode.GDHomeObjects1.length ;i < len;++i) {
    gdjs.Reference_32DisclaimerCode.GDHomeObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.Reference_32DisclaimerCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Reference_32DisclaimerCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.Reference_32DisclaimerCode.GDHomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Reference_32DisclaimerCode.GDHomeObjects1[k] = gdjs.Reference_32DisclaimerCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.Reference_32DisclaimerCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Front Page", false);
}}

}


};

gdjs.Reference_32DisclaimerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Reference_32DisclaimerCode.GDBGObjects1.length = 0;
gdjs.Reference_32DisclaimerCode.GDBGObjects2.length = 0;
gdjs.Reference_32DisclaimerCode.GDLogoObjects1.length = 0;
gdjs.Reference_32DisclaimerCode.GDLogoObjects2.length = 0;
gdjs.Reference_32DisclaimerCode.GDHandObjects1.length = 0;
gdjs.Reference_32DisclaimerCode.GDHandObjects2.length = 0;
gdjs.Reference_32DisclaimerCode.GDHomeObjects1.length = 0;
gdjs.Reference_32DisclaimerCode.GDHomeObjects2.length = 0;
gdjs.Reference_32DisclaimerCode.GDRestartObjects1.length = 0;
gdjs.Reference_32DisclaimerCode.GDRestartObjects2.length = 0;
gdjs.Reference_32DisclaimerCode.GDLessonObjects1.length = 0;
gdjs.Reference_32DisclaimerCode.GDLessonObjects2.length = 0;

gdjs.Reference_32DisclaimerCode.eventsList0(runtimeScene);

return;

}

gdjs['Reference_32DisclaimerCode'] = gdjs.Reference_32DisclaimerCode;
