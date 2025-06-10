gdjs.SELETIONCode = {};
gdjs.SELETIONCode.localVariables = [];
gdjs.SELETIONCode.GDCHOOSE_9595BGObjects1= [];
gdjs.SELETIONCode.GDCHOOSE_9595BGObjects2= [];
gdjs.SELETIONCode.GDEASYObjects1= [];
gdjs.SELETIONCode.GDEASYObjects2= [];
gdjs.SELETIONCode.GDNewTiledSpriteObjects1= [];
gdjs.SELETIONCode.GDNewTiledSpriteObjects2= [];
gdjs.SELETIONCode.GDNORMALObjects1= [];
gdjs.SELETIONCode.GDNORMALObjects2= [];
gdjs.SELETIONCode.GDHARDObjects1= [];
gdjs.SELETIONCode.GDHARDObjects2= [];
gdjs.SELETIONCode.GDEASYTObjects1= [];
gdjs.SELETIONCode.GDEASYTObjects2= [];
gdjs.SELETIONCode.GDNORMALTObjects1= [];
gdjs.SELETIONCode.GDNORMALTObjects2= [];
gdjs.SELETIONCode.GDHARDTObjects1= [];
gdjs.SELETIONCode.GDHARDTObjects2= [];
gdjs.SELETIONCode.GDSELETIONSObjects1= [];
gdjs.SELETIONCode.GDSELETIONSObjects2= [];
gdjs.SELETIONCode.GDXButtonObjects1= [];
gdjs.SELETIONCode.GDXButtonObjects2= [];
gdjs.SELETIONCode.GDYButtonObjects1= [];
gdjs.SELETIONCode.GDYButtonObjects2= [];
gdjs.SELETIONCode.GDBButtonObjects1= [];
gdjs.SELETIONCode.GDBButtonObjects2= [];
gdjs.SELETIONCode.GDscoreObjects1= [];
gdjs.SELETIONCode.GDscoreObjects2= [];
gdjs.SELETIONCode.GDXButtonObjects1= [];
gdjs.SELETIONCode.GDXButtonObjects2= [];
gdjs.SELETIONCode.GDleaveObjects1= [];
gdjs.SELETIONCode.GDleaveObjects2= [];


gdjs.SELETIONCode.asyncCallback18340292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("EASY"), gdjs.SELETIONCode.GDEASYObjects2);

{for(var i = 0, len = gdjs.SELETIONCode.GDEASYObjects2.length ;i < len;++i) {
    gdjs.SELETIONCode.GDEASYObjects2[i].returnVariable(gdjs.SELETIONCode.GDEASYObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}gdjs.SELETIONCode.localVariables.length = 0;
}
gdjs.SELETIONCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
for (const obj of gdjs.SELETIONCode.GDEASYObjects1) asyncObjectsList.addObject("EASY", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.SELETIONCode.asyncCallback18340292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SELETIONCode.asyncCallback18341412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EASY", false);
}gdjs.SELETIONCode.localVariables.length = 0;
}
gdjs.SELETIONCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.SELETIONCode.asyncCallback18341412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SELETIONCode.asyncCallback18342708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("EASY"), gdjs.SELETIONCode.GDEASYObjects2);

{for(var i = 0, len = gdjs.SELETIONCode.GDEASYObjects2.length ;i < len;++i) {
    gdjs.SELETIONCode.GDEASYObjects2[i].returnVariable(gdjs.SELETIONCode.GDEASYObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}gdjs.SELETIONCode.localVariables.length = 0;
}
gdjs.SELETIONCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
for (const obj of gdjs.SELETIONCode.GDEASYObjects1) asyncObjectsList.addObject("EASY", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.SELETIONCode.asyncCallback18342708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SELETIONCode.asyncCallback18344724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NORMAL"), gdjs.SELETIONCode.GDNORMALObjects2);

{for(var i = 0, len = gdjs.SELETIONCode.GDNORMALObjects2.length ;i < len;++i) {
    gdjs.SELETIONCode.GDNORMALObjects2[i].returnVariable(gdjs.SELETIONCode.GDNORMALObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}gdjs.SELETIONCode.localVariables.length = 0;
}
gdjs.SELETIONCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
for (const obj of gdjs.SELETIONCode.GDNORMALObjects1) asyncObjectsList.addObject("NORMAL", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.SELETIONCode.asyncCallback18344724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SELETIONCode.asyncCallback18345612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NORMAL", false);
}gdjs.SELETIONCode.localVariables.length = 0;
}
gdjs.SELETIONCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.SELETIONCode.asyncCallback18345612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SELETIONCode.asyncCallback18346868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NORMAL"), gdjs.SELETIONCode.GDNORMALObjects2);

{for(var i = 0, len = gdjs.SELETIONCode.GDNORMALObjects2.length ;i < len;++i) {
    gdjs.SELETIONCode.GDNORMALObjects2[i].returnVariable(gdjs.SELETIONCode.GDNORMALObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}gdjs.SELETIONCode.localVariables.length = 0;
}
gdjs.SELETIONCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
for (const obj of gdjs.SELETIONCode.GDNORMALObjects1) asyncObjectsList.addObject("NORMAL", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.SELETIONCode.asyncCallback18346868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SELETIONCode.asyncCallback18348948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("HARD"), gdjs.SELETIONCode.GDHARDObjects2);

{for(var i = 0, len = gdjs.SELETIONCode.GDHARDObjects2.length ;i < len;++i) {
    gdjs.SELETIONCode.GDHARDObjects2[i].returnVariable(gdjs.SELETIONCode.GDHARDObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}gdjs.SELETIONCode.localVariables.length = 0;
}
gdjs.SELETIONCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
for (const obj of gdjs.SELETIONCode.GDHARDObjects1) asyncObjectsList.addObject("HARD", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.SELETIONCode.asyncCallback18348948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SELETIONCode.asyncCallback18349836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HARD", false);
}gdjs.SELETIONCode.localVariables.length = 0;
}
gdjs.SELETIONCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.SELETIONCode.asyncCallback18349836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SELETIONCode.asyncCallback18351092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("HARD"), gdjs.SELETIONCode.GDHARDObjects2);

{for(var i = 0, len = gdjs.SELETIONCode.GDHARDObjects2.length ;i < len;++i) {
    gdjs.SELETIONCode.GDHARDObjects2[i].returnVariable(gdjs.SELETIONCode.GDHARDObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}gdjs.SELETIONCode.localVariables.length = 0;
}
gdjs.SELETIONCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
for (const obj of gdjs.SELETIONCode.GDHARDObjects1) asyncObjectsList.addObject("HARD", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.SELETIONCode.asyncCallback18351092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SELETIONCode.asyncCallback18352964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EASY", false);
}gdjs.SELETIONCode.localVariables.length = 0;
}
gdjs.SELETIONCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.SELETIONCode.asyncCallback18352964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SELETIONCode.asyncCallback18353836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NORMAL", false);
}gdjs.SELETIONCode.localVariables.length = 0;
}
gdjs.SELETIONCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.SELETIONCode.asyncCallback18353836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SELETIONCode.asyncCallback18354780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HARD", false);
}gdjs.SELETIONCode.localVariables.length = 0;
}
gdjs.SELETIONCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.SELETIONCode.asyncCallback18354780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SELETIONCode.asyncCallback18355892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EASY", false);
}gdjs.SELETIONCode.localVariables.length = 0;
}
gdjs.SELETIONCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.SELETIONCode.asyncCallback18355892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SELETIONCode.asyncCallback18357172 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NORMAL", false);
}gdjs.SELETIONCode.localVariables.length = 0;
}
gdjs.SELETIONCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.SELETIONCode.asyncCallback18357172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SELETIONCode.asyncCallback18358276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HARD", false);
}gdjs.SELETIONCode.localVariables.length = 0;
}
gdjs.SELETIONCode.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SELETIONCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.SELETIONCode.asyncCallback18358276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SELETIONCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "BGM1.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EASY"), gdjs.SELETIONCode.GDEASYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SELETIONCode.GDEASYObjects1.length;i<l;++i) {
    if ( gdjs.SELETIONCode.GDEASYObjects1[i].getVariableNumber(gdjs.SELETIONCode.GDEASYObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SELETIONCode.GDEASYObjects1[k] = gdjs.SELETIONCode.GDEASYObjects1[i];
        ++k;
    }
}
gdjs.SELETIONCode.GDEASYObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SELETIONCode.GDEASYObjects1 */
{for(var i = 0, len = gdjs.SELETIONCode.GDEASYObjects1.length ;i < len;++i) {
    gdjs.SELETIONCode.GDEASYObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.75, false, false);
}
}
{ //Subevents
gdjs.SELETIONCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EASY"), gdjs.SELETIONCode.GDEASYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SELETIONCode.GDEASYObjects1.length;i<l;++i) {
    if ( gdjs.SELETIONCode.GDEASYObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SELETIONCode.GDEASYObjects1[k] = gdjs.SELETIONCode.GDEASYObjects1[i];
        ++k;
    }
}
gdjs.SELETIONCode.GDEASYObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.SELETIONCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EASY"), gdjs.SELETIONCode.GDEASYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SELETIONCode.GDEASYObjects1.length;i<l;++i) {
    if ( gdjs.SELETIONCode.GDEASYObjects1[i].getVariableNumber(gdjs.SELETIONCode.GDEASYObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.SELETIONCode.GDEASYObjects1[k] = gdjs.SELETIONCode.GDEASYObjects1[i];
        ++k;
    }
}
gdjs.SELETIONCode.GDEASYObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SELETIONCode.GDEASYObjects1 */
{for(var i = 0, len = gdjs.SELETIONCode.GDEASYObjects1.length ;i < len;++i) {
    gdjs.SELETIONCode.GDEASYObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 0.9, "linear", 0.75, false, false);
}
}
{ //Subevents
gdjs.SELETIONCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EASY"), gdjs.SELETIONCode.GDEASYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SELETIONCode.GDEASYObjects1.length;i<l;++i) {
    if ( gdjs.SELETIONCode.GDEASYObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SELETIONCode.GDEASYObjects1[k] = gdjs.SELETIONCode.GDEASYObjects1[i];
        ++k;
    }
}
gdjs.SELETIONCode.GDEASYObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SELETIONCode.GDEASYObjects1 */
{for(var i = 0, len = gdjs.SELETIONCode.GDEASYObjects1.length ;i < len;++i) {
    gdjs.SELETIONCode.GDEASYObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1.15, "linear", 0.25, false, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NORMAL"), gdjs.SELETIONCode.GDNORMALObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SELETIONCode.GDNORMALObjects1.length;i<l;++i) {
    if ( gdjs.SELETIONCode.GDNORMALObjects1[i].getVariableNumber(gdjs.SELETIONCode.GDNORMALObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SELETIONCode.GDNORMALObjects1[k] = gdjs.SELETIONCode.GDNORMALObjects1[i];
        ++k;
    }
}
gdjs.SELETIONCode.GDNORMALObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SELETIONCode.GDNORMALObjects1 */
{for(var i = 0, len = gdjs.SELETIONCode.GDNORMALObjects1.length ;i < len;++i) {
    gdjs.SELETIONCode.GDNORMALObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.75, false, false);
}
}
{ //Subevents
gdjs.SELETIONCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NORMAL"), gdjs.SELETIONCode.GDNORMALObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SELETIONCode.GDNORMALObjects1.length;i<l;++i) {
    if ( gdjs.SELETIONCode.GDNORMALObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SELETIONCode.GDNORMALObjects1[k] = gdjs.SELETIONCode.GDNORMALObjects1[i];
        ++k;
    }
}
gdjs.SELETIONCode.GDNORMALObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.SELETIONCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NORMAL"), gdjs.SELETIONCode.GDNORMALObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SELETIONCode.GDNORMALObjects1.length;i<l;++i) {
    if ( gdjs.SELETIONCode.GDNORMALObjects1[i].getVariableNumber(gdjs.SELETIONCode.GDNORMALObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.SELETIONCode.GDNORMALObjects1[k] = gdjs.SELETIONCode.GDNORMALObjects1[i];
        ++k;
    }
}
gdjs.SELETIONCode.GDNORMALObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SELETIONCode.GDNORMALObjects1 */
{for(var i = 0, len = gdjs.SELETIONCode.GDNORMALObjects1.length ;i < len;++i) {
    gdjs.SELETIONCode.GDNORMALObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 0.9, "linear", 0.75, false, false);
}
}
{ //Subevents
gdjs.SELETIONCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NORMAL"), gdjs.SELETIONCode.GDNORMALObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SELETIONCode.GDNORMALObjects1.length;i<l;++i) {
    if ( gdjs.SELETIONCode.GDNORMALObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SELETIONCode.GDNORMALObjects1[k] = gdjs.SELETIONCode.GDNORMALObjects1[i];
        ++k;
    }
}
gdjs.SELETIONCode.GDNORMALObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SELETIONCode.GDNORMALObjects1 */
{for(var i = 0, len = gdjs.SELETIONCode.GDNORMALObjects1.length ;i < len;++i) {
    gdjs.SELETIONCode.GDNORMALObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1.15, "linear", 0.25, false, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HARD"), gdjs.SELETIONCode.GDHARDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SELETIONCode.GDHARDObjects1.length;i<l;++i) {
    if ( gdjs.SELETIONCode.GDHARDObjects1[i].getVariableNumber(gdjs.SELETIONCode.GDHARDObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SELETIONCode.GDHARDObjects1[k] = gdjs.SELETIONCode.GDHARDObjects1[i];
        ++k;
    }
}
gdjs.SELETIONCode.GDHARDObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SELETIONCode.GDHARDObjects1 */
{for(var i = 0, len = gdjs.SELETIONCode.GDHARDObjects1.length ;i < len;++i) {
    gdjs.SELETIONCode.GDHARDObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.75, false, false);
}
}
{ //Subevents
gdjs.SELETIONCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HARD"), gdjs.SELETIONCode.GDHARDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SELETIONCode.GDHARDObjects1.length;i<l;++i) {
    if ( gdjs.SELETIONCode.GDHARDObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SELETIONCode.GDHARDObjects1[k] = gdjs.SELETIONCode.GDHARDObjects1[i];
        ++k;
    }
}
gdjs.SELETIONCode.GDHARDObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.SELETIONCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HARD"), gdjs.SELETIONCode.GDHARDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SELETIONCode.GDHARDObjects1.length;i<l;++i) {
    if ( gdjs.SELETIONCode.GDHARDObjects1[i].getVariableNumber(gdjs.SELETIONCode.GDHARDObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.SELETIONCode.GDHARDObjects1[k] = gdjs.SELETIONCode.GDHARDObjects1[i];
        ++k;
    }
}
gdjs.SELETIONCode.GDHARDObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SELETIONCode.GDHARDObjects1 */
{for(var i = 0, len = gdjs.SELETIONCode.GDHARDObjects1.length ;i < len;++i) {
    gdjs.SELETIONCode.GDHARDObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 0.9, "linear", 0.75, false, false);
}
}
{ //Subevents
gdjs.SELETIONCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HARD"), gdjs.SELETIONCode.GDHARDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SELETIONCode.GDHARDObjects1.length;i<l;++i) {
    if ( gdjs.SELETIONCode.GDHARDObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SELETIONCode.GDHARDObjects1[k] = gdjs.SELETIONCode.GDHARDObjects1[i];
        ++k;
    }
}
gdjs.SELETIONCode.GDHARDObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SELETIONCode.GDHARDObjects1 */
{for(var i = 0, len = gdjs.SELETIONCode.GDHARDObjects1.length ;i < len;++i) {
    gdjs.SELETIONCode.GDHARDObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1.15, "linear", 0.25, false, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.SELETIONCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "y");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.SELETIONCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.SELETIONCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18355524);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.SELETIONCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Y", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18357028);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.SELETIONCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18357908);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.SELETIONCode.eventsList14(runtimeScene);} //End of subevents
}

}


};

gdjs.SELETIONCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SELETIONCode.GDCHOOSE_9595BGObjects1.length = 0;
gdjs.SELETIONCode.GDCHOOSE_9595BGObjects2.length = 0;
gdjs.SELETIONCode.GDEASYObjects1.length = 0;
gdjs.SELETIONCode.GDEASYObjects2.length = 0;
gdjs.SELETIONCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.SELETIONCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.SELETIONCode.GDNORMALObjects1.length = 0;
gdjs.SELETIONCode.GDNORMALObjects2.length = 0;
gdjs.SELETIONCode.GDHARDObjects1.length = 0;
gdjs.SELETIONCode.GDHARDObjects2.length = 0;
gdjs.SELETIONCode.GDEASYTObjects1.length = 0;
gdjs.SELETIONCode.GDEASYTObjects2.length = 0;
gdjs.SELETIONCode.GDNORMALTObjects1.length = 0;
gdjs.SELETIONCode.GDNORMALTObjects2.length = 0;
gdjs.SELETIONCode.GDHARDTObjects1.length = 0;
gdjs.SELETIONCode.GDHARDTObjects2.length = 0;
gdjs.SELETIONCode.GDSELETIONSObjects1.length = 0;
gdjs.SELETIONCode.GDSELETIONSObjects2.length = 0;
gdjs.SELETIONCode.GDXButtonObjects1.length = 0;
gdjs.SELETIONCode.GDXButtonObjects2.length = 0;
gdjs.SELETIONCode.GDYButtonObjects1.length = 0;
gdjs.SELETIONCode.GDYButtonObjects2.length = 0;
gdjs.SELETIONCode.GDBButtonObjects1.length = 0;
gdjs.SELETIONCode.GDBButtonObjects2.length = 0;
gdjs.SELETIONCode.GDscoreObjects1.length = 0;
gdjs.SELETIONCode.GDscoreObjects2.length = 0;
gdjs.SELETIONCode.GDXButtonObjects1.length = 0;
gdjs.SELETIONCode.GDXButtonObjects2.length = 0;
gdjs.SELETIONCode.GDleaveObjects1.length = 0;
gdjs.SELETIONCode.GDleaveObjects2.length = 0;

gdjs.SELETIONCode.eventsList15(runtimeScene);
gdjs.SELETIONCode.GDCHOOSE_9595BGObjects1.length = 0;
gdjs.SELETIONCode.GDCHOOSE_9595BGObjects2.length = 0;
gdjs.SELETIONCode.GDEASYObjects1.length = 0;
gdjs.SELETIONCode.GDEASYObjects2.length = 0;
gdjs.SELETIONCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.SELETIONCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.SELETIONCode.GDNORMALObjects1.length = 0;
gdjs.SELETIONCode.GDNORMALObjects2.length = 0;
gdjs.SELETIONCode.GDHARDObjects1.length = 0;
gdjs.SELETIONCode.GDHARDObjects2.length = 0;
gdjs.SELETIONCode.GDEASYTObjects1.length = 0;
gdjs.SELETIONCode.GDEASYTObjects2.length = 0;
gdjs.SELETIONCode.GDNORMALTObjects1.length = 0;
gdjs.SELETIONCode.GDNORMALTObjects2.length = 0;
gdjs.SELETIONCode.GDHARDTObjects1.length = 0;
gdjs.SELETIONCode.GDHARDTObjects2.length = 0;
gdjs.SELETIONCode.GDSELETIONSObjects1.length = 0;
gdjs.SELETIONCode.GDSELETIONSObjects2.length = 0;
gdjs.SELETIONCode.GDXButtonObjects1.length = 0;
gdjs.SELETIONCode.GDXButtonObjects2.length = 0;
gdjs.SELETIONCode.GDYButtonObjects1.length = 0;
gdjs.SELETIONCode.GDYButtonObjects2.length = 0;
gdjs.SELETIONCode.GDBButtonObjects1.length = 0;
gdjs.SELETIONCode.GDBButtonObjects2.length = 0;
gdjs.SELETIONCode.GDscoreObjects1.length = 0;
gdjs.SELETIONCode.GDscoreObjects2.length = 0;
gdjs.SELETIONCode.GDXButtonObjects1.length = 0;
gdjs.SELETIONCode.GDXButtonObjects2.length = 0;
gdjs.SELETIONCode.GDleaveObjects1.length = 0;
gdjs.SELETIONCode.GDleaveObjects2.length = 0;


return;

}

gdjs['SELETIONCode'] = gdjs.SELETIONCode;
