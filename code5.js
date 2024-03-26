gdjs.PresentationCode = {};
gdjs.PresentationCode.GDPresentationObjects1= [];
gdjs.PresentationCode.GDPresentationObjects2= [];
gdjs.PresentationCode.GDNextObjects1= [];
gdjs.PresentationCode.GDNextObjects2= [];
gdjs.PresentationCode.GDPreviousObjects1= [];
gdjs.PresentationCode.GDPreviousObjects2= [];
gdjs.PresentationCode.GDLABObjects1= [];
gdjs.PresentationCode.GDLABObjects2= [];
gdjs.PresentationCode.GDLogoObjects1= [];
gdjs.PresentationCode.GDLogoObjects2= [];
gdjs.PresentationCode.GDHandObjects1= [];
gdjs.PresentationCode.GDHandObjects2= [];
gdjs.PresentationCode.GDHomeObjects1= [];
gdjs.PresentationCode.GDHomeObjects2= [];
gdjs.PresentationCode.GDRestartObjects1= [];
gdjs.PresentationCode.GDRestartObjects2= [];
gdjs.PresentationCode.GDLessonObjects1= [];
gdjs.PresentationCode.GDLessonObjects2= [];


gdjs.PresentationCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LAB"), gdjs.PresentationCode.GDLABObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PresentationCode.GDLABObjects1.length;i<l;++i) {
    if ( gdjs.PresentationCode.GDLABObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PresentationCode.GDLABObjects1[k] = gdjs.PresentationCode.GDLABObjects1[i];
        ++k;
    }
}
gdjs.PresentationCode.GDLABObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.PresentationCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PresentationCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.PresentationCode.GDHomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PresentationCode.GDHomeObjects1[k] = gdjs.PresentationCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.PresentationCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Front Page", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.PresentationCode.GDHomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("LAB"), gdjs.PresentationCode.GDLABObjects1);
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDHomeObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDHomeObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 100);
}
}{for(var i = 0, len = gdjs.PresentationCode.GDLABObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDLABObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 250);
}
}{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "close";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LAB"), gdjs.PresentationCode.GDLABObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDLABObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDLABObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "open";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LAB"), gdjs.PresentationCode.GDLABObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDLABObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDLABObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.PresentationCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PresentationCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.PresentationCode.GDNextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PresentationCode.GDNextObjects1[k] = gdjs.PresentationCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.PresentationCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Previous"), gdjs.PresentationCode.GDPreviousObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PresentationCode.GDPreviousObjects1.length;i<l;++i) {
    if ( gdjs.PresentationCode.GDPreviousObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PresentationCode.GDPreviousObjects1[k] = gdjs.PresentationCode.GDPreviousObjects1[i];
        ++k;
    }
}
gdjs.PresentationCode.GDPreviousObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) <= 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].getBehavior("Animation").setAnimationName("1");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].getBehavior("Animation").setAnimationName("2");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].getBehavior("Animation").setAnimationName("3");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].getBehavior("Animation").setAnimationName("4");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].getBehavior("Animation").setAnimationName("5");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].getBehavior("Animation").setAnimationName("6");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].getBehavior("Animation").setAnimationName("7");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 8;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].getBehavior("Animation").setAnimationName("8");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 9;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].getBehavior("Animation").setAnimationName("9");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].getBehavior("Animation").setAnimationName("10");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 11;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].getBehavior("Animation").setAnimationName("11");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 12;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].getBehavior("Animation").setAnimationName("12");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 13;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].getBehavior("Animation").setAnimationName("13");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 14;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].getBehavior("Animation").setAnimationName("14");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 15;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].getBehavior("Animation").setAnimationName("15");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 15;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(15);
}}

}


};

gdjs.PresentationCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PresentationCode.GDPresentationObjects1.length = 0;
gdjs.PresentationCode.GDPresentationObjects2.length = 0;
gdjs.PresentationCode.GDNextObjects1.length = 0;
gdjs.PresentationCode.GDNextObjects2.length = 0;
gdjs.PresentationCode.GDPreviousObjects1.length = 0;
gdjs.PresentationCode.GDPreviousObjects2.length = 0;
gdjs.PresentationCode.GDLABObjects1.length = 0;
gdjs.PresentationCode.GDLABObjects2.length = 0;
gdjs.PresentationCode.GDLogoObjects1.length = 0;
gdjs.PresentationCode.GDLogoObjects2.length = 0;
gdjs.PresentationCode.GDHandObjects1.length = 0;
gdjs.PresentationCode.GDHandObjects2.length = 0;
gdjs.PresentationCode.GDHomeObjects1.length = 0;
gdjs.PresentationCode.GDHomeObjects2.length = 0;
gdjs.PresentationCode.GDRestartObjects1.length = 0;
gdjs.PresentationCode.GDRestartObjects2.length = 0;
gdjs.PresentationCode.GDLessonObjects1.length = 0;
gdjs.PresentationCode.GDLessonObjects2.length = 0;

gdjs.PresentationCode.eventsList0(runtimeScene);

return;

}

gdjs['PresentationCode'] = gdjs.PresentationCode;
