gdjs.RestartingCode = {};
gdjs.RestartingCode.GDTextObjects1= [];
gdjs.RestartingCode.GDTextObjects2= [];
gdjs.RestartingCode.GDLogoObjects1= [];
gdjs.RestartingCode.GDLogoObjects2= [];
gdjs.RestartingCode.GDHandObjects1= [];
gdjs.RestartingCode.GDHandObjects2= [];
gdjs.RestartingCode.GDHomeObjects1= [];
gdjs.RestartingCode.GDHomeObjects2= [];
gdjs.RestartingCode.GDRestartObjects1= [];
gdjs.RestartingCode.GDRestartObjects2= [];
gdjs.RestartingCode.GDLessonObjects1= [];
gdjs.RestartingCode.GDLessonObjects2= [];
gdjs.RestartingCode.GDBackObjects1= [];
gdjs.RestartingCode.GDBackObjects2= [];


gdjs.RestartingCode.asyncCallback16157884 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Simulation", false);
}}
gdjs.RestartingCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.RestartingCode.asyncCallback16157884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.RestartingCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.RestartingCode.GDTextObjects1);
{for(var i = 0, len = gdjs.RestartingCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.RestartingCode.GDTextObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.RestartingCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.RestartingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RestartingCode.GDTextObjects1.length = 0;
gdjs.RestartingCode.GDTextObjects2.length = 0;
gdjs.RestartingCode.GDLogoObjects1.length = 0;
gdjs.RestartingCode.GDLogoObjects2.length = 0;
gdjs.RestartingCode.GDHandObjects1.length = 0;
gdjs.RestartingCode.GDHandObjects2.length = 0;
gdjs.RestartingCode.GDHomeObjects1.length = 0;
gdjs.RestartingCode.GDHomeObjects2.length = 0;
gdjs.RestartingCode.GDRestartObjects1.length = 0;
gdjs.RestartingCode.GDRestartObjects2.length = 0;
gdjs.RestartingCode.GDLessonObjects1.length = 0;
gdjs.RestartingCode.GDLessonObjects2.length = 0;
gdjs.RestartingCode.GDBackObjects1.length = 0;
gdjs.RestartingCode.GDBackObjects2.length = 0;

gdjs.RestartingCode.eventsList1(runtimeScene);

return;

}

gdjs['RestartingCode'] = gdjs.RestartingCode;
