gdjs.ReferenceCode = {};
gdjs.ReferenceCode.GDBGObjects1= [];
gdjs.ReferenceCode.GDBGObjects2= [];
gdjs.ReferenceCode.GDLogoObjects1= [];
gdjs.ReferenceCode.GDLogoObjects2= [];
gdjs.ReferenceCode.GDHandObjects1= [];
gdjs.ReferenceCode.GDHandObjects2= [];
gdjs.ReferenceCode.GDHomeObjects1= [];
gdjs.ReferenceCode.GDHomeObjects2= [];
gdjs.ReferenceCode.GDRestartObjects1= [];
gdjs.ReferenceCode.GDRestartObjects2= [];
gdjs.ReferenceCode.GDLessonObjects1= [];
gdjs.ReferenceCode.GDLessonObjects2= [];
gdjs.ReferenceCode.GDBackObjects1= [];
gdjs.ReferenceCode.GDBackObjects2= [];


gdjs.ReferenceCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.ReferenceCode.GDHomeObjects1);
{for(var i = 0, len = gdjs.ReferenceCode.GDHomeObjects1.length ;i < len;++i) {
    gdjs.ReferenceCode.GDHomeObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.ReferenceCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ReferenceCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.ReferenceCode.GDHomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ReferenceCode.GDHomeObjects1[k] = gdjs.ReferenceCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.ReferenceCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Front Page", false);
}}

}


};

gdjs.ReferenceCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ReferenceCode.GDBGObjects1.length = 0;
gdjs.ReferenceCode.GDBGObjects2.length = 0;
gdjs.ReferenceCode.GDLogoObjects1.length = 0;
gdjs.ReferenceCode.GDLogoObjects2.length = 0;
gdjs.ReferenceCode.GDHandObjects1.length = 0;
gdjs.ReferenceCode.GDHandObjects2.length = 0;
gdjs.ReferenceCode.GDHomeObjects1.length = 0;
gdjs.ReferenceCode.GDHomeObjects2.length = 0;
gdjs.ReferenceCode.GDRestartObjects1.length = 0;
gdjs.ReferenceCode.GDRestartObjects2.length = 0;
gdjs.ReferenceCode.GDLessonObjects1.length = 0;
gdjs.ReferenceCode.GDLessonObjects2.length = 0;
gdjs.ReferenceCode.GDBackObjects1.length = 0;
gdjs.ReferenceCode.GDBackObjects2.length = 0;

gdjs.ReferenceCode.eventsList0(runtimeScene);

return;

}

gdjs['ReferenceCode'] = gdjs.ReferenceCode;
