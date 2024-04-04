gdjs.ActivitiesCode = {};
gdjs.ActivitiesCode.GDActivity2Objects1= [];
gdjs.ActivitiesCode.GDActivity2Objects2= [];
gdjs.ActivitiesCode.GDActivity2Objects3= [];
gdjs.ActivitiesCode.GDActivity2Objects4= [];
gdjs.ActivitiesCode.GDActivity3Objects1= [];
gdjs.ActivitiesCode.GDActivity3Objects2= [];
gdjs.ActivitiesCode.GDActivity3Objects3= [];
gdjs.ActivitiesCode.GDActivity3Objects4= [];
gdjs.ActivitiesCode.GDActivity1Objects1= [];
gdjs.ActivitiesCode.GDActivity1Objects2= [];
gdjs.ActivitiesCode.GDActivity1Objects3= [];
gdjs.ActivitiesCode.GDActivity1Objects4= [];
gdjs.ActivitiesCode.GDActivity4Objects1= [];
gdjs.ActivitiesCode.GDActivity4Objects2= [];
gdjs.ActivitiesCode.GDActivity4Objects3= [];
gdjs.ActivitiesCode.GDActivity4Objects4= [];
gdjs.ActivitiesCode.GDExit_9595noteObjects1= [];
gdjs.ActivitiesCode.GDExit_9595noteObjects2= [];
gdjs.ActivitiesCode.GDExit_9595noteObjects3= [];
gdjs.ActivitiesCode.GDExit_9595noteObjects4= [];
gdjs.ActivitiesCode.GDScore_95951Objects1= [];
gdjs.ActivitiesCode.GDScore_95951Objects2= [];
gdjs.ActivitiesCode.GDScore_95951Objects3= [];
gdjs.ActivitiesCode.GDScore_95951Objects4= [];
gdjs.ActivitiesCode.GDScore_95952Objects1= [];
gdjs.ActivitiesCode.GDScore_95952Objects2= [];
gdjs.ActivitiesCode.GDScore_95952Objects3= [];
gdjs.ActivitiesCode.GDScore_95952Objects4= [];
gdjs.ActivitiesCode.GDScore_95953Objects1= [];
gdjs.ActivitiesCode.GDScore_95953Objects2= [];
gdjs.ActivitiesCode.GDScore_95953Objects3= [];
gdjs.ActivitiesCode.GDScore_95953Objects4= [];
gdjs.ActivitiesCode.GDScore_95954Objects1= [];
gdjs.ActivitiesCode.GDScore_95954Objects2= [];
gdjs.ActivitiesCode.GDScore_95954Objects3= [];
gdjs.ActivitiesCode.GDScore_95954Objects4= [];
gdjs.ActivitiesCode.GDExcellentObjects1= [];
gdjs.ActivitiesCode.GDExcellentObjects2= [];
gdjs.ActivitiesCode.GDExcellentObjects3= [];
gdjs.ActivitiesCode.GDExcellentObjects4= [];
gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1= [];
gdjs.ActivitiesCode.GDFinal_9595ScoreObjects2= [];
gdjs.ActivitiesCode.GDFinal_9595ScoreObjects3= [];
gdjs.ActivitiesCode.GDFinal_9595ScoreObjects4= [];
gdjs.ActivitiesCode.GDLogoObjects1= [];
gdjs.ActivitiesCode.GDLogoObjects2= [];
gdjs.ActivitiesCode.GDLogoObjects3= [];
gdjs.ActivitiesCode.GDLogoObjects4= [];
gdjs.ActivitiesCode.GDHandObjects1= [];
gdjs.ActivitiesCode.GDHandObjects2= [];
gdjs.ActivitiesCode.GDHandObjects3= [];
gdjs.ActivitiesCode.GDHandObjects4= [];
gdjs.ActivitiesCode.GDHomeObjects1= [];
gdjs.ActivitiesCode.GDHomeObjects2= [];
gdjs.ActivitiesCode.GDHomeObjects3= [];
gdjs.ActivitiesCode.GDHomeObjects4= [];
gdjs.ActivitiesCode.GDRestartObjects1= [];
gdjs.ActivitiesCode.GDRestartObjects2= [];
gdjs.ActivitiesCode.GDRestartObjects3= [];
gdjs.ActivitiesCode.GDRestartObjects4= [];
gdjs.ActivitiesCode.GDLessonObjects1= [];
gdjs.ActivitiesCode.GDLessonObjects2= [];
gdjs.ActivitiesCode.GDLessonObjects3= [];
gdjs.ActivitiesCode.GDLessonObjects4= [];
gdjs.ActivitiesCode.GDBackObjects1= [];
gdjs.ActivitiesCode.GDBackObjects2= [];
gdjs.ActivitiesCode.GDBackObjects3= [];
gdjs.ActivitiesCode.GDBackObjects4= [];


gdjs.ActivitiesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.ActivitiesCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ActivitiesCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.ActivitiesCode.GDHomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ActivitiesCode.GDHomeObjects1[k] = gdjs.ActivitiesCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.ActivitiesCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity1Objects2Objects = Hashtable.newFrom({"Activity1": gdjs.ActivitiesCode.GDActivity1Objects2});
gdjs.ActivitiesCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ActivitiesCode.GDActivity1Objects2, gdjs.ActivitiesCode.GDActivity1Objects3);

{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity1Objects3.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity1Objects3[i].getBehavior("Tween").addObjectWidthTween2("scale1", 329, "linear", 0.1, false);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity1Objects3.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity1Objects3[i].getBehavior("Tween").addObjectHeightTween2("scale2", 412, "linear", 0.1, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Activity1", false);
}}

}


};gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity1Objects1Objects = Hashtable.newFrom({"Activity1": gdjs.ActivitiesCode.GDActivity1Objects1});
gdjs.ActivitiesCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Activity1"), gdjs.ActivitiesCode.GDActivity1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity1Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ActivitiesCode.GDActivity1Objects2 */
{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity1Objects2.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity1Objects2[i].getBehavior("Tween").addObjectWidthTween2("scale1", 353, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity1Objects2.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity1Objects2[i].getBehavior("Tween").addObjectHeightTween2("scale2", 442, "linear", 0.2, false);
}
}
{ //Subevents
gdjs.ActivitiesCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Activity1"), gdjs.ActivitiesCode.GDActivity1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity1Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.ActivitiesCode.GDActivity1Objects1 */
{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity1Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity1Objects1[i].getBehavior("Tween").addObjectHeightTween2("scale2", 412, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity1Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity1Objects1[i].getBehavior("Tween").addObjectWidthTween2("scale1", 329, "linear", 0.2, false);
}
}}

}


};gdjs.ActivitiesCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) <= 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Activity2"), gdjs.ActivitiesCode.GDActivity2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Activity3"), gdjs.ActivitiesCode.GDActivity3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Activity4"), gdjs.ActivitiesCode.GDActivity4Objects1);
{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity2Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity2Objects1[i].setColor("168;168;168");
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity3Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity3Objects1[i].setColor("168;168;168");
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity4Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity4Objects1[i].setColor("168;168;168");
}
}
{ //Subevents
gdjs.ActivitiesCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity2Objects2Objects = Hashtable.newFrom({"Activity2": gdjs.ActivitiesCode.GDActivity2Objects2});
gdjs.ActivitiesCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ActivitiesCode.GDActivity2Objects2, gdjs.ActivitiesCode.GDActivity2Objects3);

{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity2Objects3.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity2Objects3[i].getBehavior("Tween").addObjectWidthTween2("scale1", 329, "linear", 0.1, false);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity2Objects3.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity2Objects3[i].getBehavior("Tween").addObjectHeightTween2("scale2", 412, "linear", 0.1, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Activity2", false);
}}

}


};gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity2Objects1Objects = Hashtable.newFrom({"Activity2": gdjs.ActivitiesCode.GDActivity2Objects1});
gdjs.ActivitiesCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ActivitiesCode.GDActivity2Objects1, gdjs.ActivitiesCode.GDActivity2Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity2Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ActivitiesCode.GDActivity2Objects2 */
{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity2Objects2.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity2Objects2[i].getBehavior("Tween").addObjectWidthTween2("scale1", 353, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity2Objects2.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity2Objects2[i].getBehavior("Tween").addObjectHeightTween2("scale2", 442, "linear", 0.2, false);
}
}
{ //Subevents
gdjs.ActivitiesCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.ActivitiesCode.GDActivity2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.ActivitiesCode.GDActivity2Objects1 */
{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity2Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity2Objects1[i].getBehavior("Tween").addObjectHeightTween2("scale2", 412, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity2Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity2Objects1[i].getBehavior("Tween").addObjectWidthTween2("scale1", 329, "linear", 0.2, false);
}
}}

}


};gdjs.ActivitiesCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Activity2"), gdjs.ActivitiesCode.GDActivity2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Activity3"), gdjs.ActivitiesCode.GDActivity3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Activity4"), gdjs.ActivitiesCode.GDActivity4Objects1);
{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity2Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity2Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity3Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity3Objects1[i].setColor("168;168;168");
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity4Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity4Objects1[i].setColor("168;168;168");
}
}
{ //Subevents
gdjs.ActivitiesCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity3Objects2Objects = Hashtable.newFrom({"Activity3": gdjs.ActivitiesCode.GDActivity3Objects2});
gdjs.ActivitiesCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ActivitiesCode.GDActivity3Objects2, gdjs.ActivitiesCode.GDActivity3Objects3);

{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity3Objects3.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity3Objects3[i].getBehavior("Tween").addObjectWidthTween2("scale1", 329, "linear", 0.1, false);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity3Objects3.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity3Objects3[i].getBehavior("Tween").addObjectHeightTween2("scale2", 412, "linear", 0.1, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Activity 3", false);
}}

}


};gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity3Objects1Objects = Hashtable.newFrom({"Activity3": gdjs.ActivitiesCode.GDActivity3Objects1});
gdjs.ActivitiesCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ActivitiesCode.GDActivity3Objects1, gdjs.ActivitiesCode.GDActivity3Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity3Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ActivitiesCode.GDActivity3Objects2 */
{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity3Objects2.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity3Objects2[i].getBehavior("Tween").addObjectWidthTween2("scale1", 353, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity3Objects2.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity3Objects2[i].getBehavior("Tween").addObjectHeightTween2("scale2", 442, "linear", 0.2, false);
}
}
{ //Subevents
gdjs.ActivitiesCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.ActivitiesCode.GDActivity3Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity3Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.ActivitiesCode.GDActivity3Objects1 */
{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity3Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity3Objects1[i].getBehavior("Tween").addObjectHeightTween2("scale2", 412, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity3Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity3Objects1[i].getBehavior("Tween").addObjectWidthTween2("scale1", 329, "linear", 0.2, false);
}
}}

}


};gdjs.ActivitiesCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Activity2"), gdjs.ActivitiesCode.GDActivity2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Activity3"), gdjs.ActivitiesCode.GDActivity3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Activity4"), gdjs.ActivitiesCode.GDActivity4Objects1);
{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity2Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity2Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity3Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity3Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity4Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity4Objects1[i].setColor("168;168;168");
}
}
{ //Subevents
gdjs.ActivitiesCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity4Objects2Objects = Hashtable.newFrom({"Activity4": gdjs.ActivitiesCode.GDActivity4Objects2});
gdjs.ActivitiesCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.ActivitiesCode.GDActivity4Objects2, gdjs.ActivitiesCode.GDActivity4Objects3);

{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity4Objects3.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity4Objects3[i].getBehavior("Tween").addObjectWidthTween2("scale1", 329, "linear", 0.1, false);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity4Objects3.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity4Objects3[i].getBehavior("Tween").addObjectHeightTween2("scale2", 412, "linear", 0.1, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Activity4_new", false);
}}

}


};gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity4Objects1Objects = Hashtable.newFrom({"Activity4": gdjs.ActivitiesCode.GDActivity4Objects1});
gdjs.ActivitiesCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ActivitiesCode.GDActivity4Objects1, gdjs.ActivitiesCode.GDActivity4Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity4Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ActivitiesCode.GDActivity4Objects2 */
{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity4Objects2.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity4Objects2[i].getBehavior("Tween").addObjectWidthTween2("scale1", 353, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity4Objects2.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity4Objects2[i].getBehavior("Tween").addObjectHeightTween2("scale2", 442, "linear", 0.2, false);
}
}
{ //Subevents
gdjs.ActivitiesCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.ActivitiesCode.GDActivity4Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ActivitiesCode.mapOfGDgdjs_9546ActivitiesCode_9546GDActivity4Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.ActivitiesCode.GDActivity4Objects1 */
{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity4Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity4Objects1[i].getBehavior("Tween").addObjectHeightTween2("scale2", 412, "linear", 0.2, false);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity4Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity4Objects1[i].getBehavior("Tween").addObjectWidthTween2("scale1", 329, "linear", 0.2, false);
}
}}

}


};gdjs.ActivitiesCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Activity2"), gdjs.ActivitiesCode.GDActivity2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Activity3"), gdjs.ActivitiesCode.GDActivity3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Activity4"), gdjs.ActivitiesCode.GDActivity4Objects1);
{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity2Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity2Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity3Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity3Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity4Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity4Objects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.ActivitiesCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.ActivitiesCode.eventsList13 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17446276);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "audio\\Great.mp3", false, 70, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)));
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}}

}


};gdjs.ActivitiesCode.asyncCallback17446556 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(6);
}
{ //Subevents
gdjs.ActivitiesCode.eventsList13(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.ActivitiesCode.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.ActivitiesCode.asyncCallback17446556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ActivitiesCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Activity1"), gdjs.ActivitiesCode.GDActivity1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Activity2"), gdjs.ActivitiesCode.GDActivity2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Activity3"), gdjs.ActivitiesCode.GDActivity3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Activity4"), gdjs.ActivitiesCode.GDActivity4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Excellent"), gdjs.ActivitiesCode.GDExcellentObjects1);
gdjs.copyArray(runtimeScene.getObjects("Exit_note"), gdjs.ActivitiesCode.GDExit_9595noteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Final_Score"), gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.ActivitiesCode.GDHomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.ActivitiesCode.GDRestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score_1"), gdjs.ActivitiesCode.GDScore_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score_2"), gdjs.ActivitiesCode.GDScore_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score_3"), gdjs.ActivitiesCode.GDScore_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("Score_4"), gdjs.ActivitiesCode.GDScore_95954Objects1);
{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity1Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity1Objects1[i].setCenterXInScene((( gdjs.ActivitiesCode.GDActivity2Objects1.length === 0 ) ? 0 :gdjs.ActivitiesCode.GDActivity2Objects1[0].getPointX("")) - 400);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity2Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity2Objects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 200);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity3Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity3Objects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + 200);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDActivity4Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDActivity4Objects1[i].setCenterXInScene((( gdjs.ActivitiesCode.GDActivity3Objects1.length === 0 ) ? 0 :gdjs.ActivitiesCode.GDActivity3Objects1[0].getPointX("")) + 400);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDHomeObjects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDHomeObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 100);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDExit_9595noteObjects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDExit_9595noteObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDExcellentObjects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDExcellentObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDScore_95951Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDScore_95951Objects1[i].setCenterPositionInScene((( gdjs.ActivitiesCode.GDActivity1Objects1.length === 0 ) ? 0 :gdjs.ActivitiesCode.GDActivity1Objects1[0].getPointX("")),(( gdjs.ActivitiesCode.GDActivity1Objects1.length === 0 ) ? 0 :gdjs.ActivitiesCode.GDActivity1Objects1[0].getPointY("")) + 250);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDScore_95952Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDScore_95952Objects1[i].setCenterPositionInScene((( gdjs.ActivitiesCode.GDActivity2Objects1.length === 0 ) ? 0 :gdjs.ActivitiesCode.GDActivity2Objects1[0].getPointX("")),(( gdjs.ActivitiesCode.GDActivity2Objects1.length === 0 ) ? 0 :gdjs.ActivitiesCode.GDActivity2Objects1[0].getPointY("")) + 250);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDScore_95953Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDScore_95953Objects1[i].setCenterPositionInScene((( gdjs.ActivitiesCode.GDActivity3Objects1.length === 0 ) ? 0 :gdjs.ActivitiesCode.GDActivity3Objects1[0].getPointX("")),(( gdjs.ActivitiesCode.GDActivity3Objects1.length === 0 ) ? 0 :gdjs.ActivitiesCode.GDActivity3Objects1[0].getPointY("")) + 250);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDScore_95954Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDScore_95954Objects1[i].setCenterPositionInScene((( gdjs.ActivitiesCode.GDActivity4Objects1.length === 0 ) ? 0 :gdjs.ActivitiesCode.GDActivity4Objects1[0].getPointX("")),(( gdjs.ActivitiesCode.GDActivity4Objects1.length === 0 ) ? 0 :gdjs.ActivitiesCode.GDActivity4Objects1[0].getPointY("")) + 250);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDScore_95952Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDScore_95952Objects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDScore_95951Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDScore_95951Objects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDScore_95953Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDScore_95953Objects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDScore_95954Objects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDScore_95954Objects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDRestartObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 250);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.ActivitiesCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ActivitiesCode.GDRestartObjects1.length;i<l;++i) {
    if ( gdjs.ActivitiesCode.GDRestartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ActivitiesCode.GDRestartObjects1[k] = gdjs.ActivitiesCode.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.ActivitiesCode.GDRestartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Activities", false);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.ActivitiesCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ActivitiesCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.ActivitiesCode.GDHomeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ActivitiesCode.GDHomeObjects1[k] = gdjs.ActivitiesCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.ActivitiesCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Front Page", false);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Exit_note"), gdjs.ActivitiesCode.GDExit_9595noteObjects1);
{for(var i = 0, len = gdjs.ActivitiesCode.GDExit_9595noteObjects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDExit_9595noteObjects1[i].hide();
}
}
{ //Subevents
gdjs.ActivitiesCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.ActivitiesCode.eventsList3(runtimeScene);
}


{


gdjs.ActivitiesCode.eventsList6(runtimeScene);
}


{


gdjs.ActivitiesCode.eventsList9(runtimeScene);
}


{


gdjs.ActivitiesCode.eventsList12(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Excellent"), gdjs.ActivitiesCode.GDExcellentObjects1);
gdjs.copyArray(runtimeScene.getObjects("Final_Score"), gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1);
{for(var i = 0, len = gdjs.ActivitiesCode.GDExcellentObjects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDExcellentObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1[i].getBehavior("Text").setText("Total Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}
{ //Subevents
gdjs.ActivitiesCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) >= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Final_Score"), gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1);
{for(var i = 0, len = gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1[i].getBehavior("Text").setText("Total Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Excellent"), gdjs.ActivitiesCode.GDExcellentObjects1);
gdjs.copyArray(runtimeScene.getObjects("Final_Score"), gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1);
{for(var i = 0, len = gdjs.ActivitiesCode.GDExcellentObjects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDExcellentObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1[i].hide();
}
}}

}


};

gdjs.ActivitiesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ActivitiesCode.GDActivity2Objects1.length = 0;
gdjs.ActivitiesCode.GDActivity2Objects2.length = 0;
gdjs.ActivitiesCode.GDActivity2Objects3.length = 0;
gdjs.ActivitiesCode.GDActivity2Objects4.length = 0;
gdjs.ActivitiesCode.GDActivity3Objects1.length = 0;
gdjs.ActivitiesCode.GDActivity3Objects2.length = 0;
gdjs.ActivitiesCode.GDActivity3Objects3.length = 0;
gdjs.ActivitiesCode.GDActivity3Objects4.length = 0;
gdjs.ActivitiesCode.GDActivity1Objects1.length = 0;
gdjs.ActivitiesCode.GDActivity1Objects2.length = 0;
gdjs.ActivitiesCode.GDActivity1Objects3.length = 0;
gdjs.ActivitiesCode.GDActivity1Objects4.length = 0;
gdjs.ActivitiesCode.GDActivity4Objects1.length = 0;
gdjs.ActivitiesCode.GDActivity4Objects2.length = 0;
gdjs.ActivitiesCode.GDActivity4Objects3.length = 0;
gdjs.ActivitiesCode.GDActivity4Objects4.length = 0;
gdjs.ActivitiesCode.GDExit_9595noteObjects1.length = 0;
gdjs.ActivitiesCode.GDExit_9595noteObjects2.length = 0;
gdjs.ActivitiesCode.GDExit_9595noteObjects3.length = 0;
gdjs.ActivitiesCode.GDExit_9595noteObjects4.length = 0;
gdjs.ActivitiesCode.GDScore_95951Objects1.length = 0;
gdjs.ActivitiesCode.GDScore_95951Objects2.length = 0;
gdjs.ActivitiesCode.GDScore_95951Objects3.length = 0;
gdjs.ActivitiesCode.GDScore_95951Objects4.length = 0;
gdjs.ActivitiesCode.GDScore_95952Objects1.length = 0;
gdjs.ActivitiesCode.GDScore_95952Objects2.length = 0;
gdjs.ActivitiesCode.GDScore_95952Objects3.length = 0;
gdjs.ActivitiesCode.GDScore_95952Objects4.length = 0;
gdjs.ActivitiesCode.GDScore_95953Objects1.length = 0;
gdjs.ActivitiesCode.GDScore_95953Objects2.length = 0;
gdjs.ActivitiesCode.GDScore_95953Objects3.length = 0;
gdjs.ActivitiesCode.GDScore_95953Objects4.length = 0;
gdjs.ActivitiesCode.GDScore_95954Objects1.length = 0;
gdjs.ActivitiesCode.GDScore_95954Objects2.length = 0;
gdjs.ActivitiesCode.GDScore_95954Objects3.length = 0;
gdjs.ActivitiesCode.GDScore_95954Objects4.length = 0;
gdjs.ActivitiesCode.GDExcellentObjects1.length = 0;
gdjs.ActivitiesCode.GDExcellentObjects2.length = 0;
gdjs.ActivitiesCode.GDExcellentObjects3.length = 0;
gdjs.ActivitiesCode.GDExcellentObjects4.length = 0;
gdjs.ActivitiesCode.GDFinal_9595ScoreObjects1.length = 0;
gdjs.ActivitiesCode.GDFinal_9595ScoreObjects2.length = 0;
gdjs.ActivitiesCode.GDFinal_9595ScoreObjects3.length = 0;
gdjs.ActivitiesCode.GDFinal_9595ScoreObjects4.length = 0;
gdjs.ActivitiesCode.GDLogoObjects1.length = 0;
gdjs.ActivitiesCode.GDLogoObjects2.length = 0;
gdjs.ActivitiesCode.GDLogoObjects3.length = 0;
gdjs.ActivitiesCode.GDLogoObjects4.length = 0;
gdjs.ActivitiesCode.GDHandObjects1.length = 0;
gdjs.ActivitiesCode.GDHandObjects2.length = 0;
gdjs.ActivitiesCode.GDHandObjects3.length = 0;
gdjs.ActivitiesCode.GDHandObjects4.length = 0;
gdjs.ActivitiesCode.GDHomeObjects1.length = 0;
gdjs.ActivitiesCode.GDHomeObjects2.length = 0;
gdjs.ActivitiesCode.GDHomeObjects3.length = 0;
gdjs.ActivitiesCode.GDHomeObjects4.length = 0;
gdjs.ActivitiesCode.GDRestartObjects1.length = 0;
gdjs.ActivitiesCode.GDRestartObjects2.length = 0;
gdjs.ActivitiesCode.GDRestartObjects3.length = 0;
gdjs.ActivitiesCode.GDRestartObjects4.length = 0;
gdjs.ActivitiesCode.GDLessonObjects1.length = 0;
gdjs.ActivitiesCode.GDLessonObjects2.length = 0;
gdjs.ActivitiesCode.GDLessonObjects3.length = 0;
gdjs.ActivitiesCode.GDLessonObjects4.length = 0;
gdjs.ActivitiesCode.GDBackObjects1.length = 0;
gdjs.ActivitiesCode.GDBackObjects2.length = 0;
gdjs.ActivitiesCode.GDBackObjects3.length = 0;
gdjs.ActivitiesCode.GDBackObjects4.length = 0;

gdjs.ActivitiesCode.eventsList15(runtimeScene);

return;

}

gdjs['ActivitiesCode'] = gdjs.ActivitiesCode;
