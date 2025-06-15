gdjs.GAME_32OVERCode = {};
gdjs.GAME_32OVERCode.localVariables = [];
gdjs.GAME_32OVERCode.GDEND_9595BGObjects1= [];
gdjs.GAME_32OVERCode.GDEND_9595BGObjects2= [];
gdjs.GAME_32OVERCode.GDBACKObjects1= [];
gdjs.GAME_32OVERCode.GDBACKObjects2= [];
gdjs.GAME_32OVERCode.GDGAMEOVERObjects1= [];
gdjs.GAME_32OVERCode.GDGAMEOVERObjects2= [];
gdjs.GAME_32OVERCode.GDNewTextObjects1= [];
gdjs.GAME_32OVERCode.GDNewTextObjects2= [];
gdjs.GAME_32OVERCode.GDyourscoreObjects1= [];
gdjs.GAME_32OVERCode.GDyourscoreObjects2= [];
gdjs.GAME_32OVERCode.GDinputnameObjects1= [];
gdjs.GAME_32OVERCode.GDinputnameObjects2= [];
gdjs.GAME_32OVERCode.GDoutputrankObjects1= [];
gdjs.GAME_32OVERCode.GDoutputrankObjects2= [];
gdjs.GAME_32OVERCode.GDMenuObjects1= [];
gdjs.GAME_32OVERCode.GDMenuObjects2= [];
gdjs.GAME_32OVERCode.GDscoreObjects1= [];
gdjs.GAME_32OVERCode.GDscoreObjects2= [];
gdjs.GAME_32OVERCode.GDXButtonObjects1= [];
gdjs.GAME_32OVERCode.GDXButtonObjects2= [];
gdjs.GAME_32OVERCode.GDleaveObjects1= [];
gdjs.GAME_32OVERCode.GDleaveObjects2= [];
gdjs.GAME_32OVERCode.GDplayernameObjects1= [];
gdjs.GAME_32OVERCode.GDplayernameObjects2= [];


gdjs.GAME_32OVERCode.asyncCallback17341988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("playername"), gdjs.GAME_32OVERCode.GDplayernameObjects2);

{for(var i = 0, len = gdjs.GAME_32OVERCode.GDplayernameObjects2.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDplayernameObjects2[i].hide();
}
}gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
for (const obj of gdjs.GAME_32OVERCode.GDplayernameObjects1) asyncObjectsList.addObject("playername", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)), "POST", "application/json", runtimeScene.getScene().getVariables().get("hook"), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback17341988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback19336892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Menu"), gdjs.GAME_32OVERCode.GDMenuObjects2);

gdjs.copyArray(runtimeScene.getObjects("outputrank"), gdjs.GAME_32OVERCode.GDoutputrankObjects2);
{gdjs.evtTools.network.jsonToVariableStructure("rank", runtimeScene.getScene().getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.GAME_32OVERCode.GDoutputrankObjects2.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDoutputrankObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.GAME_32OVERCode.GDMenuObjects2.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDMenuObjects2[i].hide();
}
}gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
for (const obj of gdjs.GAME_32OVERCode.GDMenuObjects1) asyncObjectsList.addObject("Menu", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/rank", "", "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback19336892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback16645524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("BACK"), gdjs.GAME_32OVERCode.GDBACKObjects2);

{for(var i = 0, len = gdjs.GAME_32OVERCode.GDBACKObjects2.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDBACKObjects2[i].returnVariable(gdjs.GAME_32OVERCode.GDBACKObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
for (const obj of gdjs.GAME_32OVERCode.GDBACKObjects1) asyncObjectsList.addObject("BACK", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback16645524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback19346460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("BACK"), gdjs.GAME_32OVERCode.GDBACKObjects2);

{for(var i = 0, len = gdjs.GAME_32OVERCode.GDBACKObjects2.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDBACKObjects2[i].returnVariable(gdjs.GAME_32OVERCode.GDBACKObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
for (const obj of gdjs.GAME_32OVERCode.GDBACKObjects1) asyncObjectsList.addObject("BACK", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback19346460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback19348980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAME START", false);
}gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback19348980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback19350388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAME START", false);
}gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback19350388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback19351132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAME START", false);
}gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback19351132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback19352084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAME START", false);
}gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback19352084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.GAME_32OVERCode.GDMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("outputrank"), gdjs.GAME_32OVERCode.GDoutputrankObjects1);
gdjs.copyArray(runtimeScene.getObjects("playername"), gdjs.GAME_32OVERCode.GDplayernameObjects1);
gdjs.copyArray(runtimeScene.getObjects("yourscore"), gdjs.GAME_32OVERCode.GDyourscoreObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "BGM1.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.GAME_32OVERCode.GDyourscoreObjects1.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDyourscoreObjects1[i].getBehavior("Text").setText("yourscore :" + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("score").getAsString());
}
}{for(var i = 0, len = gdjs.GAME_32OVERCode.GDplayernameObjects1.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDplayernameObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GAME_32OVERCode.GDoutputrankObjects1.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDoutputrankObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GAME_32OVERCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDMenuObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("playername"), gdjs.GAME_32OVERCode.GDplayernameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDplayernameObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDplayernameObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDplayernameObjects1[k] = gdjs.GAME_32OVERCode.GDplayernameObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDplayernameObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32OVERCode.GDplayernameObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name").setString((( gdjs.GAME_32OVERCode.GDplayernameObjects1.length === 0 ) ? "" :gdjs.GAME_32OVERCode.GDplayernameObjects1[0].getBehavior("Text").getText()));
}
{ //Subevents
gdjs.GAME_32OVERCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("outputrank"), gdjs.GAME_32OVERCode.GDoutputrankObjects1);
{for(var i = 0, len = gdjs.GAME_32OVERCode.GDoutputrankObjects1.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDoutputrankObjects1[i].getBehavior("Text").setText(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.GAME_32OVERCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDMenuObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDMenuObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDMenuObjects1[k] = gdjs.GAME_32OVERCode.GDMenuObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDMenuObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GAME_32OVERCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BACK"), gdjs.GAME_32OVERCode.GDBACKObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDBACKObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDBACKObjects1[i].getVariableNumber(gdjs.GAME_32OVERCode.GDBACKObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDBACKObjects1[k] = gdjs.GAME_32OVERCode.GDBACKObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDBACKObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32OVERCode.GDBACKObjects1 */
{for(var i = 0, len = gdjs.GAME_32OVERCode.GDBACKObjects1.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDBACKObjects1[i].getBehavior("Animation").setAnimationName("007");
}
}{for(var i = 0, len = gdjs.GAME_32OVERCode.GDBACKObjects1.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDBACKObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 0.75, "linear", 0.75, false, false);
}
}
{ //Subevents
gdjs.GAME_32OVERCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BACK"), gdjs.GAME_32OVERCode.GDBACKObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDBACKObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDBACKObjects1[i].getVariableNumber(gdjs.GAME_32OVERCode.GDBACKObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDBACKObjects1[k] = gdjs.GAME_32OVERCode.GDBACKObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDBACKObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32OVERCode.GDBACKObjects1 */
{for(var i = 0, len = gdjs.GAME_32OVERCode.GDBACKObjects1.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDBACKObjects1[i].getBehavior("Animation").setAnimationName("007");
}
}{for(var i = 0, len = gdjs.GAME_32OVERCode.GDBACKObjects1.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDBACKObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.75, false, false);
}
}
{ //Subevents
gdjs.GAME_32OVERCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BACK"), gdjs.GAME_32OVERCode.GDBACKObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDBACKObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDBACKObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDBACKObjects1[k] = gdjs.GAME_32OVERCode.GDBACKObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDBACKObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32OVERCode.GDBACKObjects1 */
{for(var i = 0, len = gdjs.GAME_32OVERCode.GDBACKObjects1.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDBACKObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1.25, "linear", 0.25, false, false);
}
}{for(var i = 0, len = gdjs.GAME_32OVERCode.GDBACKObjects1.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDBACKObjects1[i].getBehavior("Animation").setAnimationName("008");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BACK"), gdjs.GAME_32OVERCode.GDBACKObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDBACKObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDBACKObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDBACKObjects1[k] = gdjs.GAME_32OVERCode.GDBACKObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDBACKObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32OVERCode.GDBACKObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.GAME_32OVERCode.GDBACKObjects1.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDBACKObjects1[i].getBehavior("Animation").setAnimationName("008");
}
}
{ //Subevents
gdjs.GAME_32OVERCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BACK"), gdjs.GAME_32OVERCode.GDBACKObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDBACKObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDBACKObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDBACKObjects1[k] = gdjs.GAME_32OVERCode.GDBACKObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDBACKObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32OVERCode.GDBACKObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.GAME_32OVERCode.GDBACKObjects1.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDBACKObjects1[i].getBehavior("Animation").setAnimationName("008");
}
}
{ //Subevents
gdjs.GAME_32OVERCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19350940);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.GAME_32OVERCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19351788);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.GAME_32OVERCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("XButton"), gdjs.GAME_32OVERCode.GDXButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDXButtonObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDXButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDXButtonObjects1[k] = gdjs.GAME_32OVERCode.GDXButtonObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDXButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.GAME_32OVERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAME_32OVERCode.GDEND_9595BGObjects1.length = 0;
gdjs.GAME_32OVERCode.GDEND_9595BGObjects2.length = 0;
gdjs.GAME_32OVERCode.GDBACKObjects1.length = 0;
gdjs.GAME_32OVERCode.GDBACKObjects2.length = 0;
gdjs.GAME_32OVERCode.GDGAMEOVERObjects1.length = 0;
gdjs.GAME_32OVERCode.GDGAMEOVERObjects2.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects1.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects2.length = 0;
gdjs.GAME_32OVERCode.GDyourscoreObjects1.length = 0;
gdjs.GAME_32OVERCode.GDyourscoreObjects2.length = 0;
gdjs.GAME_32OVERCode.GDinputnameObjects1.length = 0;
gdjs.GAME_32OVERCode.GDinputnameObjects2.length = 0;
gdjs.GAME_32OVERCode.GDoutputrankObjects1.length = 0;
gdjs.GAME_32OVERCode.GDoutputrankObjects2.length = 0;
gdjs.GAME_32OVERCode.GDMenuObjects1.length = 0;
gdjs.GAME_32OVERCode.GDMenuObjects2.length = 0;
gdjs.GAME_32OVERCode.GDscoreObjects1.length = 0;
gdjs.GAME_32OVERCode.GDscoreObjects2.length = 0;
gdjs.GAME_32OVERCode.GDXButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDXButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDleaveObjects1.length = 0;
gdjs.GAME_32OVERCode.GDleaveObjects2.length = 0;
gdjs.GAME_32OVERCode.GDplayernameObjects1.length = 0;
gdjs.GAME_32OVERCode.GDplayernameObjects2.length = 0;

gdjs.GAME_32OVERCode.eventsList8(runtimeScene);
gdjs.GAME_32OVERCode.GDEND_9595BGObjects1.length = 0;
gdjs.GAME_32OVERCode.GDEND_9595BGObjects2.length = 0;
gdjs.GAME_32OVERCode.GDBACKObjects1.length = 0;
gdjs.GAME_32OVERCode.GDBACKObjects2.length = 0;
gdjs.GAME_32OVERCode.GDGAMEOVERObjects1.length = 0;
gdjs.GAME_32OVERCode.GDGAMEOVERObjects2.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects1.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects2.length = 0;
gdjs.GAME_32OVERCode.GDyourscoreObjects1.length = 0;
gdjs.GAME_32OVERCode.GDyourscoreObjects2.length = 0;
gdjs.GAME_32OVERCode.GDinputnameObjects1.length = 0;
gdjs.GAME_32OVERCode.GDinputnameObjects2.length = 0;
gdjs.GAME_32OVERCode.GDoutputrankObjects1.length = 0;
gdjs.GAME_32OVERCode.GDoutputrankObjects2.length = 0;
gdjs.GAME_32OVERCode.GDMenuObjects1.length = 0;
gdjs.GAME_32OVERCode.GDMenuObjects2.length = 0;
gdjs.GAME_32OVERCode.GDscoreObjects1.length = 0;
gdjs.GAME_32OVERCode.GDscoreObjects2.length = 0;
gdjs.GAME_32OVERCode.GDXButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDXButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDleaveObjects1.length = 0;
gdjs.GAME_32OVERCode.GDleaveObjects2.length = 0;
gdjs.GAME_32OVERCode.GDplayernameObjects1.length = 0;
gdjs.GAME_32OVERCode.GDplayernameObjects2.length = 0;


return;

}

gdjs['GAME_32OVERCode'] = gdjs.GAME_32OVERCode;
