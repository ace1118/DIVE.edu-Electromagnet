gdjs.PresentationCode = {};
gdjs.PresentationCode.GDPresentationObjects1= [];
gdjs.PresentationCode.GDPresentationObjects2= [];
gdjs.PresentationCode.GDPresentationObjects3= [];
gdjs.PresentationCode.GDPresentationObjects4= [];
gdjs.PresentationCode.GDNextObjects1= [];
gdjs.PresentationCode.GDNextObjects2= [];
gdjs.PresentationCode.GDNextObjects3= [];
gdjs.PresentationCode.GDNextObjects4= [];
gdjs.PresentationCode.GDPreviousObjects1= [];
gdjs.PresentationCode.GDPreviousObjects2= [];
gdjs.PresentationCode.GDPreviousObjects3= [];
gdjs.PresentationCode.GDPreviousObjects4= [];
gdjs.PresentationCode.GDLABObjects1= [];
gdjs.PresentationCode.GDLABObjects2= [];
gdjs.PresentationCode.GDLABObjects3= [];
gdjs.PresentationCode.GDLABObjects4= [];
gdjs.PresentationCode.GDplay_9595pasueObjects1= [];
gdjs.PresentationCode.GDplay_9595pasueObjects2= [];
gdjs.PresentationCode.GDplay_9595pasueObjects3= [];
gdjs.PresentationCode.GDplay_9595pasueObjects4= [];
gdjs.PresentationCode.GDSoundButtonObjects1= [];
gdjs.PresentationCode.GDSoundButtonObjects2= [];
gdjs.PresentationCode.GDSoundButtonObjects3= [];
gdjs.PresentationCode.GDSoundButtonObjects4= [];
gdjs.PresentationCode.GDLogoObjects1= [];
gdjs.PresentationCode.GDLogoObjects2= [];
gdjs.PresentationCode.GDLogoObjects3= [];
gdjs.PresentationCode.GDLogoObjects4= [];
gdjs.PresentationCode.GDHandObjects1= [];
gdjs.PresentationCode.GDHandObjects2= [];
gdjs.PresentationCode.GDHandObjects3= [];
gdjs.PresentationCode.GDHandObjects4= [];
gdjs.PresentationCode.GDHomeObjects1= [];
gdjs.PresentationCode.GDHomeObjects2= [];
gdjs.PresentationCode.GDHomeObjects3= [];
gdjs.PresentationCode.GDHomeObjects4= [];
gdjs.PresentationCode.GDRestartObjects1= [];
gdjs.PresentationCode.GDRestartObjects2= [];
gdjs.PresentationCode.GDRestartObjects3= [];
gdjs.PresentationCode.GDRestartObjects4= [];
gdjs.PresentationCode.GDLessonObjects1= [];
gdjs.PresentationCode.GDLessonObjects2= [];
gdjs.PresentationCode.GDLessonObjects3= [];
gdjs.PresentationCode.GDLessonObjects4= [];
gdjs.PresentationCode.GDBackObjects1= [];
gdjs.PresentationCode.GDBackObjects2= [];
gdjs.PresentationCode.GDBackObjects3= [];
gdjs.PresentationCode.GDBackObjects4= [];


gdjs.PresentationCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17335268);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.PresentationCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17336060);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDplay_95959595pasueObjects2Objects = Hashtable.newFrom({"play_pasue": gdjs.PresentationCode.GDplay_9595pasueObjects2});
gdjs.PresentationCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.PresentationCode.GDplay_9595pasueObjects2, gdjs.PresentationCode.GDplay_9595pasueObjects3);

{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects3.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects3[i].getBehavior("Scale").setScale(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
/* Reuse gdjs.PresentationCode.GDplay_9595pasueObjects2 */
{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects2[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects2[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.PresentationCode.GDplay_9595pasueObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDplay_95959595pasueObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PresentationCode.GDplay_9595pasueObjects2 */
{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects2[i].getBehavior("Scale").setScale(1.1);
}
}
{ //Subevents
gdjs.PresentationCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDplay_95959595pasueObjects2Objects = Hashtable.newFrom({"play_pasue": gdjs.PresentationCode.GDplay_9595pasueObjects2});
gdjs.PresentationCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.PresentationCode.GDplay_9595pasueObjects2, gdjs.PresentationCode.GDplay_9595pasueObjects3);

{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects3.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects3[i].getBehavior("Scale").setScale(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
/* Reuse gdjs.PresentationCode.GDplay_9595pasueObjects2 */
{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects2[i].getBehavior("Scale").setScale(1);
}
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects2[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects2[i].getVariables().getFromIndex(0)).setString("play");
}
}}

}


};gdjs.PresentationCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.PresentationCode.GDplay_9595pasueObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDplay_95959595pasueObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PresentationCode.GDplay_9595pasueObjects2 */
{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects2[i].getBehavior("Scale").setScale(1.1);
}
}
{ //Subevents
gdjs.PresentationCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDplay_95959595pasueObjects1Objects = Hashtable.newFrom({"play_pasue": gdjs.PresentationCode.GDplay_9595pasueObjects1});
gdjs.PresentationCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PresentationCode.GDplay_9595pasueObjects2.length;i<l;++i) {
    if ( gdjs.PresentationCode.GDplay_9595pasueObjects2[i].getVariableString(gdjs.PresentationCode.GDplay_9595pasueObjects2[i].getVariables().getFromIndex(0)) == "play" ) {
        isConditionTrue_0 = true;
        gdjs.PresentationCode.GDplay_9595pasueObjects2[k] = gdjs.PresentationCode.GDplay_9595pasueObjects2[i];
        ++k;
    }
}
gdjs.PresentationCode.GDplay_9595pasueObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PresentationCode.GDplay_9595pasueObjects2 */
{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects2[i].getBehavior("Animation").setAnimationName("play");
}
}
{ //Subevents
gdjs.PresentationCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PresentationCode.GDplay_9595pasueObjects2.length;i<l;++i) {
    if ( gdjs.PresentationCode.GDplay_9595pasueObjects2[i].getVariableString(gdjs.PresentationCode.GDplay_9595pasueObjects2[i].getVariables().getFromIndex(0)) == "pause" ) {
        isConditionTrue_0 = true;
        gdjs.PresentationCode.GDplay_9595pasueObjects2[k] = gdjs.PresentationCode.GDplay_9595pasueObjects2[i];
        ++k;
    }
}
gdjs.PresentationCode.GDplay_9595pasueObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PresentationCode.GDplay_9595pasueObjects2 */
{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects2[i].getBehavior("Animation").setAnimationName("pause");
}
}
{ //Subevents
gdjs.PresentationCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PresentationCode.GDplay_9595pasueObjects2.length;i<l;++i) {
    if ( gdjs.PresentationCode.GDplay_9595pasueObjects2[i].getBehavior("Animation").getAnimationName() == "play" ) {
        isConditionTrue_0 = true;
        gdjs.PresentationCode.GDplay_9595pasueObjects2[k] = gdjs.PresentationCode.GDplay_9595pasueObjects2[i];
        ++k;
    }
}
gdjs.PresentationCode.GDplay_9595pasueObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.PresentationCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PresentationCode.GDplay_9595pasueObjects2.length;i<l;++i) {
    if ( gdjs.PresentationCode.GDplay_9595pasueObjects2[i].getBehavior("Animation").getAnimationName() == "pause" ) {
        isConditionTrue_0 = true;
        gdjs.PresentationCode.GDplay_9595pasueObjects2[k] = gdjs.PresentationCode.GDplay_9595pasueObjects2[i];
        ++k;
    }
}
gdjs.PresentationCode.GDplay_9595pasueObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.PresentationCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDplay_95959595pasueObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.PresentationCode.GDplay_9595pasueObjects1 */
{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getBehavior("Scale").setScale(1);
}
}}

}


};gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDSoundButtonObjects2Objects = Hashtable.newFrom({"SoundButton": gdjs.PresentationCode.GDSoundButtonObjects2});
gdjs.PresentationCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.PresentationCode.GDSoundButtonObjects2, gdjs.PresentationCode.GDSoundButtonObjects3);

{for(var i = 0, len = gdjs.PresentationCode.GDSoundButtonObjects3.length ;i < len;++i) {
    gdjs.PresentationCode.GDSoundButtonObjects3[i].getBehavior("Scale").setScale(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
/* Reuse gdjs.PresentationCode.GDSoundButtonObjects2 */
{for(var i = 0, len = gdjs.PresentationCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDSoundButtonObjects2[i].getBehavior("Scale").setScale(1);
}
}{for(var i = 0, len = gdjs.PresentationCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDSoundButtonObjects2[i].returnVariable(gdjs.PresentationCode.GDSoundButtonObjects2[i].getVariables().getFromIndex(0)).setString("on");
}
}}

}


};gdjs.PresentationCode.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs.PresentationCode.GDSoundButtonObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDSoundButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PresentationCode.GDSoundButtonObjects2 */
{for(var i = 0, len = gdjs.PresentationCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDSoundButtonObjects2[i].getBehavior("Scale").setScale(1.1);
}
}
{ //Subevents
gdjs.PresentationCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDSoundButtonObjects2Objects = Hashtable.newFrom({"SoundButton": gdjs.PresentationCode.GDSoundButtonObjects2});
gdjs.PresentationCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.PresentationCode.GDSoundButtonObjects2, gdjs.PresentationCode.GDSoundButtonObjects3);

{for(var i = 0, len = gdjs.PresentationCode.GDSoundButtonObjects3.length ;i < len;++i) {
    gdjs.PresentationCode.GDSoundButtonObjects3[i].getBehavior("Scale").setScale(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
/* Reuse gdjs.PresentationCode.GDSoundButtonObjects2 */
{for(var i = 0, len = gdjs.PresentationCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDSoundButtonObjects2[i].getBehavior("Scale").setScale(1);
}
}{for(var i = 0, len = gdjs.PresentationCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDSoundButtonObjects2[i].returnVariable(gdjs.PresentationCode.GDSoundButtonObjects2[i].getVariables().getFromIndex(0)).setString("off");
}
}}

}


};gdjs.PresentationCode.eventsList10 = function(runtimeScene) {

{

/* Reuse gdjs.PresentationCode.GDSoundButtonObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDSoundButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PresentationCode.GDSoundButtonObjects2 */
{for(var i = 0, len = gdjs.PresentationCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDSoundButtonObjects2[i].getBehavior("Scale").setScale(1.1);
}
}
{ //Subevents
gdjs.PresentationCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDSoundButtonObjects1Objects = Hashtable.newFrom({"SoundButton": gdjs.PresentationCode.GDSoundButtonObjects1});
gdjs.PresentationCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.PresentationCode.GDSoundButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PresentationCode.GDSoundButtonObjects2.length;i<l;++i) {
    if ( gdjs.PresentationCode.GDSoundButtonObjects2[i].getVariableString(gdjs.PresentationCode.GDSoundButtonObjects2[i].getVariables().getFromIndex(0)) == "on" ) {
        isConditionTrue_0 = true;
        gdjs.PresentationCode.GDSoundButtonObjects2[k] = gdjs.PresentationCode.GDSoundButtonObjects2[i];
        ++k;
    }
}
gdjs.PresentationCode.GDSoundButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PresentationCode.GDSoundButtonObjects2 */
{for(var i = 0, len = gdjs.PresentationCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, 60);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.PresentationCode.GDSoundButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PresentationCode.GDSoundButtonObjects2.length;i<l;++i) {
    if ( gdjs.PresentationCode.GDSoundButtonObjects2[i].getVariableString(gdjs.PresentationCode.GDSoundButtonObjects2[i].getVariables().getFromIndex(0)) == "off" ) {
        isConditionTrue_0 = true;
        gdjs.PresentationCode.GDSoundButtonObjects2[k] = gdjs.PresentationCode.GDSoundButtonObjects2[i];
        ++k;
    }
}
gdjs.PresentationCode.GDSoundButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PresentationCode.GDSoundButtonObjects2 */
{for(var i = 0, len = gdjs.PresentationCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.PresentationCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("off");
}
}{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.PresentationCode.GDSoundButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PresentationCode.GDSoundButtonObjects2.length;i<l;++i) {
    if ( gdjs.PresentationCode.GDSoundButtonObjects2[i].getBehavior("Animation").getAnimationName() == "off" ) {
        isConditionTrue_0 = true;
        gdjs.PresentationCode.GDSoundButtonObjects2[k] = gdjs.PresentationCode.GDSoundButtonObjects2[i];
        ++k;
    }
}
gdjs.PresentationCode.GDSoundButtonObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.PresentationCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.PresentationCode.GDSoundButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PresentationCode.GDSoundButtonObjects2.length;i<l;++i) {
    if ( gdjs.PresentationCode.GDSoundButtonObjects2[i].getBehavior("Animation").getAnimationName() == "on" ) {
        isConditionTrue_0 = true;
        gdjs.PresentationCode.GDSoundButtonObjects2[k] = gdjs.PresentationCode.GDSoundButtonObjects2[i];
        ++k;
    }
}
gdjs.PresentationCode.GDSoundButtonObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.PresentationCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.PresentationCode.GDSoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PresentationCode.mapOfGDgdjs_9546PresentationCode_9546GDSoundButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.PresentationCode.GDSoundButtonObjects1 */
{for(var i = 0, len = gdjs.PresentationCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDSoundButtonObjects1[i].getBehavior("Scale").setScale(1);
}
}}

}


};gdjs.PresentationCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17358092);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio\\slide1.mp3", 1, false, 60, 1);
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17359996);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio\\slide2.mp3", 1, false, 60, 1);
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17361556);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio\\slide3.mp3", 1, false, 60, 1);
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17363116);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio\\slide4.mp3", 1, false, 60, 1);
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17363604);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio\\slide5.mp3", 1, false, 60, 1);
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17366188);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio\\slide6.mp3", 1, false, 60, 1);
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17367316);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio\\slide7.mp3", 1, false, 60, 1);
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17369508);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio\\slide8.mp3", 1, false, 60, 1);
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17371068);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio\\slide9.mp3", 1, false, 60, 1);
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17372628);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio\\slide10.mp3", 1, false, 60, 1);
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17374188);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio\\slide11.mp3", 1, false, 60, 1);
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17375748);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio\\slide12.mp3", 1, false, 60, 1);
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17377308);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio\\slide13.mp3", 1, false, 60, 1);
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17378868);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio\\slide14.mp3", 1, false, 60, 1);
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17380428);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "audio\\slide15.mp3", 1, false, 60, 1);
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].returnVariable(gdjs.PresentationCode.GDplay_9595pasueObjects1[i].getVariables().getFromIndex(0)).setString("pause");
}
}}

}


};gdjs.PresentationCode.eventsList27 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.PresentationCode.GDHandObjects1);
gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.PresentationCode.GDHomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("LAB"), gdjs.PresentationCode.GDLABObjects1);
gdjs.copyArray(runtimeScene.getObjects("Presentation"), gdjs.PresentationCode.GDPresentationObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.PresentationCode.GDSoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("play_pasue"), gdjs.PresentationCode.GDplay_9595pasueObjects1);
{for(var i = 0, len = gdjs.PresentationCode.GDHomeObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDHomeObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 100);
}
}{for(var i = 0, len = gdjs.PresentationCode.GDPresentationObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDPresentationObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.PresentationCode.GDLABObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDLABObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 260);
}
}{for(var i = 0, len = gdjs.PresentationCode.GDplay_9595pasueObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDplay_9595pasueObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.PresentationCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDSoundButtonObjects1[i].setCenterXInScene((( gdjs.PresentationCode.GDplay_9595pasueObjects1.length === 0 ) ? 0 :gdjs.PresentationCode.GDplay_9595pasueObjects1[0].getPointX("")) + 85);
}
}{gdjs.evtTools.advancedWindow.setFullScreenable(true, runtimeScene);
}{for(var i = 0, len = gdjs.PresentationCode.GDHandObjects1.length ;i < len;++i) {
    gdjs.PresentationCode.GDHandObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{


gdjs.PresentationCode.eventsList6(runtimeScene);
}


{


gdjs.PresentationCode.eventsList11(runtimeScene);
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
}
{ //Subevents
gdjs.PresentationCode.eventsList12(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.PresentationCode.eventsList13(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.PresentationCode.eventsList14(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.PresentationCode.eventsList15(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.PresentationCode.eventsList16(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.PresentationCode.eventsList17(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.PresentationCode.eventsList18(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.PresentationCode.eventsList19(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.PresentationCode.eventsList20(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.PresentationCode.eventsList21(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.PresentationCode.eventsList22(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.PresentationCode.eventsList23(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.PresentationCode.eventsList24(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.PresentationCode.eventsList25(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.PresentationCode.eventsList26(runtimeScene);} //End of subevents
}

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
gdjs.PresentationCode.GDPresentationObjects3.length = 0;
gdjs.PresentationCode.GDPresentationObjects4.length = 0;
gdjs.PresentationCode.GDNextObjects1.length = 0;
gdjs.PresentationCode.GDNextObjects2.length = 0;
gdjs.PresentationCode.GDNextObjects3.length = 0;
gdjs.PresentationCode.GDNextObjects4.length = 0;
gdjs.PresentationCode.GDPreviousObjects1.length = 0;
gdjs.PresentationCode.GDPreviousObjects2.length = 0;
gdjs.PresentationCode.GDPreviousObjects3.length = 0;
gdjs.PresentationCode.GDPreviousObjects4.length = 0;
gdjs.PresentationCode.GDLABObjects1.length = 0;
gdjs.PresentationCode.GDLABObjects2.length = 0;
gdjs.PresentationCode.GDLABObjects3.length = 0;
gdjs.PresentationCode.GDLABObjects4.length = 0;
gdjs.PresentationCode.GDplay_9595pasueObjects1.length = 0;
gdjs.PresentationCode.GDplay_9595pasueObjects2.length = 0;
gdjs.PresentationCode.GDplay_9595pasueObjects3.length = 0;
gdjs.PresentationCode.GDplay_9595pasueObjects4.length = 0;
gdjs.PresentationCode.GDSoundButtonObjects1.length = 0;
gdjs.PresentationCode.GDSoundButtonObjects2.length = 0;
gdjs.PresentationCode.GDSoundButtonObjects3.length = 0;
gdjs.PresentationCode.GDSoundButtonObjects4.length = 0;
gdjs.PresentationCode.GDLogoObjects1.length = 0;
gdjs.PresentationCode.GDLogoObjects2.length = 0;
gdjs.PresentationCode.GDLogoObjects3.length = 0;
gdjs.PresentationCode.GDLogoObjects4.length = 0;
gdjs.PresentationCode.GDHandObjects1.length = 0;
gdjs.PresentationCode.GDHandObjects2.length = 0;
gdjs.PresentationCode.GDHandObjects3.length = 0;
gdjs.PresentationCode.GDHandObjects4.length = 0;
gdjs.PresentationCode.GDHomeObjects1.length = 0;
gdjs.PresentationCode.GDHomeObjects2.length = 0;
gdjs.PresentationCode.GDHomeObjects3.length = 0;
gdjs.PresentationCode.GDHomeObjects4.length = 0;
gdjs.PresentationCode.GDRestartObjects1.length = 0;
gdjs.PresentationCode.GDRestartObjects2.length = 0;
gdjs.PresentationCode.GDRestartObjects3.length = 0;
gdjs.PresentationCode.GDRestartObjects4.length = 0;
gdjs.PresentationCode.GDLessonObjects1.length = 0;
gdjs.PresentationCode.GDLessonObjects2.length = 0;
gdjs.PresentationCode.GDLessonObjects3.length = 0;
gdjs.PresentationCode.GDLessonObjects4.length = 0;
gdjs.PresentationCode.GDBackObjects1.length = 0;
gdjs.PresentationCode.GDBackObjects2.length = 0;
gdjs.PresentationCode.GDBackObjects3.length = 0;
gdjs.PresentationCode.GDBackObjects4.length = 0;

gdjs.PresentationCode.eventsList27(runtimeScene);

return;

}

gdjs['PresentationCode'] = gdjs.PresentationCode;
