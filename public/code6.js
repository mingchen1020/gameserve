gdjs.GAME_32OVERCode = {};
gdjs.GAME_32OVERCode.localVariables = [];
gdjs.GAME_32OVERCode.GDEND_9595BGObjects1= [];
gdjs.GAME_32OVERCode.GDEND_9595BGObjects2= [];
gdjs.GAME_32OVERCode.GDEND_9595BGObjects3= [];
gdjs.GAME_32OVERCode.GDEND_9595BGObjects4= [];
gdjs.GAME_32OVERCode.GDBACKObjects1= [];
gdjs.GAME_32OVERCode.GDBACKObjects2= [];
gdjs.GAME_32OVERCode.GDBACKObjects3= [];
gdjs.GAME_32OVERCode.GDBACKObjects4= [];
gdjs.GAME_32OVERCode.GDGAMEOVERObjects1= [];
gdjs.GAME_32OVERCode.GDGAMEOVERObjects2= [];
gdjs.GAME_32OVERCode.GDGAMEOVERObjects3= [];
gdjs.GAME_32OVERCode.GDGAMEOVERObjects4= [];
gdjs.GAME_32OVERCode.GDNewTextObjects1= [];
gdjs.GAME_32OVERCode.GDNewTextObjects2= [];
gdjs.GAME_32OVERCode.GDNewTextObjects3= [];
gdjs.GAME_32OVERCode.GDNewTextObjects4= [];
gdjs.GAME_32OVERCode.GDyourscoreObjects1= [];
gdjs.GAME_32OVERCode.GDyourscoreObjects2= [];
gdjs.GAME_32OVERCode.GDyourscoreObjects3= [];
gdjs.GAME_32OVERCode.GDyourscoreObjects4= [];
gdjs.GAME_32OVERCode.GDinputnameObjects1= [];
gdjs.GAME_32OVERCode.GDinputnameObjects2= [];
gdjs.GAME_32OVERCode.GDinputnameObjects3= [];
gdjs.GAME_32OVERCode.GDinputnameObjects4= [];
gdjs.GAME_32OVERCode.GDoutputrankObjects1= [];
gdjs.GAME_32OVERCode.GDoutputrankObjects2= [];
gdjs.GAME_32OVERCode.GDoutputrankObjects3= [];
gdjs.GAME_32OVERCode.GDoutputrankObjects4= [];
gdjs.GAME_32OVERCode.GDscoreObjects1= [];
gdjs.GAME_32OVERCode.GDscoreObjects2= [];
gdjs.GAME_32OVERCode.GDscoreObjects3= [];
gdjs.GAME_32OVERCode.GDscoreObjects4= [];
gdjs.GAME_32OVERCode.GDXButtonObjects1= [];
gdjs.GAME_32OVERCode.GDXButtonObjects2= [];
gdjs.GAME_32OVERCode.GDXButtonObjects3= [];
gdjs.GAME_32OVERCode.GDXButtonObjects4= [];
gdjs.GAME_32OVERCode.GDleaveObjects1= [];
gdjs.GAME_32OVERCode.GDleaveObjects2= [];
gdjs.GAME_32OVERCode.GDleaveObjects3= [];
gdjs.GAME_32OVERCode.GDleaveObjects4= [];
gdjs.GAME_32OVERCode.GDplayernameObjects1= [];
gdjs.GAME_32OVERCode.GDplayernameObjects2= [];
gdjs.GAME_32OVERCode.GDplayernameObjects3= [];
gdjs.GAME_32OVERCode.GDplayernameObjects4= [];


gdjs.GAME_32OVERCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure("rank", runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


};gdjs.GAME_32OVERCode.asyncCallback11641900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("playername"), gdjs.GAME_32OVERCode.GDplayernameObjects3);

{for(var i = 0, len = gdjs.GAME_32OVERCode.GDplayernameObjects3.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDplayernameObjects3[i].hide();
}
}
{ //Subevents
gdjs.GAME_32OVERCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
/* Don't save playername as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)), "POST", "application/json", runtimeScene.getScene().getVariables().get("hook"), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback11641900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback9963140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);

{ //Subevents
gdjs.GAME_32OVERCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
for (const obj of gdjs.GAME_32OVERCode.GDplayernameObjects1) asyncObjectsList.addObject("playername", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/rank", "", "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback9963140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback19121284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("BACK"), gdjs.GAME_32OVERCode.GDBACKObjects2);

{for(var i = 0, len = gdjs.GAME_32OVERCode.GDBACKObjects2.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDBACKObjects2[i].returnVariable(gdjs.GAME_32OVERCode.GDBACKObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback19121284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback19122716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("BACK"), gdjs.GAME_32OVERCode.GDBACKObjects2);

{for(var i = 0, len = gdjs.GAME_32OVERCode.GDBACKObjects2.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDBACKObjects2[i].returnVariable(gdjs.GAME_32OVERCode.GDBACKObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
for (const obj of gdjs.GAME_32OVERCode.GDBACKObjects1) asyncObjectsList.addObject("BACK", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback19122716(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback19124908 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback19124908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback19126252 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback19126252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback19127428 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback19127428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback19128556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAME START", false);
}gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback19128556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback19131700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("http://127.0.0.1/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback19131700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback19132516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback19132516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.asyncCallback12305892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
gdjs.GAME_32OVERCode.localVariables.length = 0;
}
gdjs.GAME_32OVERCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32OVERCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("http://127.0.0.1/rank", "", "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.GAME_32OVERCode.asyncCallback12305892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32OVERCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("playername"), gdjs.GAME_32OVERCode.GDplayernameObjects1);
gdjs.copyArray(runtimeScene.getObjects("yourscore"), gdjs.GAME_32OVERCode.GDyourscoreObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "BGM1.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.GAME_32OVERCode.GDyourscoreObjects1.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDyourscoreObjects1[i].getBehavior("Text").setText("yourscore :" + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("score").getAsString());
}
}{for(var i = 0, len = gdjs.GAME_32OVERCode.GDplayernameObjects1.length ;i < len;++i) {
    gdjs.GAME_32OVERCode.GDplayernameObjects1[i].hide(false);
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
gdjs.GAME_32OVERCode.eventsList2(runtimeScene);} //End of subevents
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
gdjs.GAME_32OVERCode.eventsList3(runtimeScene);} //End of subevents
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
gdjs.GAME_32OVERCode.eventsList4(runtimeScene);} //End of subevents
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
gdjs.GAME_32OVERCode.eventsList5(runtimeScene);} //End of subevents
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
gdjs.GAME_32OVERCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19127284);
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


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19128188);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.GAME_32OVERCode.eventsList8(runtimeScene);} //End of subevents
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


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
if (isConditionTrue_0) {

{ //Subevents
gdjs.GAME_32OVERCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("inputname"), gdjs.GAME_32OVERCode.GDinputnameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDinputnameObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDinputnameObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDinputnameObjects1[k] = gdjs.GAME_32OVERCode.GDinputnameObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDinputnameObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GAME_32OVERCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "t");
if (isConditionTrue_0) {

{ //Subevents
gdjs.GAME_32OVERCode.eventsList11(runtimeScene);} //End of subevents
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


};

gdjs.GAME_32OVERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAME_32OVERCode.GDEND_9595BGObjects1.length = 0;
gdjs.GAME_32OVERCode.GDEND_9595BGObjects2.length = 0;
gdjs.GAME_32OVERCode.GDEND_9595BGObjects3.length = 0;
gdjs.GAME_32OVERCode.GDEND_9595BGObjects4.length = 0;
gdjs.GAME_32OVERCode.GDBACKObjects1.length = 0;
gdjs.GAME_32OVERCode.GDBACKObjects2.length = 0;
gdjs.GAME_32OVERCode.GDBACKObjects3.length = 0;
gdjs.GAME_32OVERCode.GDBACKObjects4.length = 0;
gdjs.GAME_32OVERCode.GDGAMEOVERObjects1.length = 0;
gdjs.GAME_32OVERCode.GDGAMEOVERObjects2.length = 0;
gdjs.GAME_32OVERCode.GDGAMEOVERObjects3.length = 0;
gdjs.GAME_32OVERCode.GDGAMEOVERObjects4.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects1.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects2.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects3.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects4.length = 0;
gdjs.GAME_32OVERCode.GDyourscoreObjects1.length = 0;
gdjs.GAME_32OVERCode.GDyourscoreObjects2.length = 0;
gdjs.GAME_32OVERCode.GDyourscoreObjects3.length = 0;
gdjs.GAME_32OVERCode.GDyourscoreObjects4.length = 0;
gdjs.GAME_32OVERCode.GDinputnameObjects1.length = 0;
gdjs.GAME_32OVERCode.GDinputnameObjects2.length = 0;
gdjs.GAME_32OVERCode.GDinputnameObjects3.length = 0;
gdjs.GAME_32OVERCode.GDinputnameObjects4.length = 0;
gdjs.GAME_32OVERCode.GDoutputrankObjects1.length = 0;
gdjs.GAME_32OVERCode.GDoutputrankObjects2.length = 0;
gdjs.GAME_32OVERCode.GDoutputrankObjects3.length = 0;
gdjs.GAME_32OVERCode.GDoutputrankObjects4.length = 0;
gdjs.GAME_32OVERCode.GDscoreObjects1.length = 0;
gdjs.GAME_32OVERCode.GDscoreObjects2.length = 0;
gdjs.GAME_32OVERCode.GDscoreObjects3.length = 0;
gdjs.GAME_32OVERCode.GDscoreObjects4.length = 0;
gdjs.GAME_32OVERCode.GDXButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDXButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDXButtonObjects3.length = 0;
gdjs.GAME_32OVERCode.GDXButtonObjects4.length = 0;
gdjs.GAME_32OVERCode.GDleaveObjects1.length = 0;
gdjs.GAME_32OVERCode.GDleaveObjects2.length = 0;
gdjs.GAME_32OVERCode.GDleaveObjects3.length = 0;
gdjs.GAME_32OVERCode.GDleaveObjects4.length = 0;
gdjs.GAME_32OVERCode.GDplayernameObjects1.length = 0;
gdjs.GAME_32OVERCode.GDplayernameObjects2.length = 0;
gdjs.GAME_32OVERCode.GDplayernameObjects3.length = 0;
gdjs.GAME_32OVERCode.GDplayernameObjects4.length = 0;

gdjs.GAME_32OVERCode.eventsList12(runtimeScene);
gdjs.GAME_32OVERCode.GDEND_9595BGObjects1.length = 0;
gdjs.GAME_32OVERCode.GDEND_9595BGObjects2.length = 0;
gdjs.GAME_32OVERCode.GDEND_9595BGObjects3.length = 0;
gdjs.GAME_32OVERCode.GDEND_9595BGObjects4.length = 0;
gdjs.GAME_32OVERCode.GDBACKObjects1.length = 0;
gdjs.GAME_32OVERCode.GDBACKObjects2.length = 0;
gdjs.GAME_32OVERCode.GDBACKObjects3.length = 0;
gdjs.GAME_32OVERCode.GDBACKObjects4.length = 0;
gdjs.GAME_32OVERCode.GDGAMEOVERObjects1.length = 0;
gdjs.GAME_32OVERCode.GDGAMEOVERObjects2.length = 0;
gdjs.GAME_32OVERCode.GDGAMEOVERObjects3.length = 0;
gdjs.GAME_32OVERCode.GDGAMEOVERObjects4.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects1.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects2.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects3.length = 0;
gdjs.GAME_32OVERCode.GDNewTextObjects4.length = 0;
gdjs.GAME_32OVERCode.GDyourscoreObjects1.length = 0;
gdjs.GAME_32OVERCode.GDyourscoreObjects2.length = 0;
gdjs.GAME_32OVERCode.GDyourscoreObjects3.length = 0;
gdjs.GAME_32OVERCode.GDyourscoreObjects4.length = 0;
gdjs.GAME_32OVERCode.GDinputnameObjects1.length = 0;
gdjs.GAME_32OVERCode.GDinputnameObjects2.length = 0;
gdjs.GAME_32OVERCode.GDinputnameObjects3.length = 0;
gdjs.GAME_32OVERCode.GDinputnameObjects4.length = 0;
gdjs.GAME_32OVERCode.GDoutputrankObjects1.length = 0;
gdjs.GAME_32OVERCode.GDoutputrankObjects2.length = 0;
gdjs.GAME_32OVERCode.GDoutputrankObjects3.length = 0;
gdjs.GAME_32OVERCode.GDoutputrankObjects4.length = 0;
gdjs.GAME_32OVERCode.GDscoreObjects1.length = 0;
gdjs.GAME_32OVERCode.GDscoreObjects2.length = 0;
gdjs.GAME_32OVERCode.GDscoreObjects3.length = 0;
gdjs.GAME_32OVERCode.GDscoreObjects4.length = 0;
gdjs.GAME_32OVERCode.GDXButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDXButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDXButtonObjects3.length = 0;
gdjs.GAME_32OVERCode.GDXButtonObjects4.length = 0;
gdjs.GAME_32OVERCode.GDleaveObjects1.length = 0;
gdjs.GAME_32OVERCode.GDleaveObjects2.length = 0;
gdjs.GAME_32OVERCode.GDleaveObjects3.length = 0;
gdjs.GAME_32OVERCode.GDleaveObjects4.length = 0;
gdjs.GAME_32OVERCode.GDplayernameObjects1.length = 0;
gdjs.GAME_32OVERCode.GDplayernameObjects2.length = 0;
gdjs.GAME_32OVERCode.GDplayernameObjects3.length = 0;
gdjs.GAME_32OVERCode.GDplayernameObjects4.length = 0;


return;

}

gdjs['GAME_32OVERCode'] = gdjs.GAME_32OVERCode;
