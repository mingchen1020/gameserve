gdjs.GAME_32STARTCode = {};
gdjs.GAME_32STARTCode.localVariables = [];
gdjs.GAME_32STARTCode.GDobgObjects1= [];
gdjs.GAME_32STARTCode.GDobgObjects2= [];
gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1= [];
gdjs.GAME_32STARTCode.GDLargePlayButtonObjects2= [];
gdjs.GAME_32STARTCode.GDNOOBObjects1= [];
gdjs.GAME_32STARTCode.GDNOOBObjects2= [];
gdjs.GAME_32STARTCode.GDNewSpriteObjects1= [];
gdjs.GAME_32STARTCode.GDNewSpriteObjects2= [];
gdjs.GAME_32STARTCode.GDLetterKeyObjects1= [];
gdjs.GAME_32STARTCode.GDLetterKeyObjects2= [];
gdjs.GAME_32STARTCode.GDBrownBoxObjects1= [];
gdjs.GAME_32STARTCode.GDBrownBoxObjects2= [];
gdjs.GAME_32STARTCode.GDDESCRIBEObjects1= [];
gdjs.GAME_32STARTCode.GDDESCRIBEObjects2= [];
gdjs.GAME_32STARTCode.GDNewTextObjects1= [];
gdjs.GAME_32STARTCode.GDNewTextObjects2= [];
gdjs.GAME_32STARTCode.GDscoreObjects1= [];
gdjs.GAME_32STARTCode.GDscoreObjects2= [];
gdjs.GAME_32STARTCode.GDXButtonObjects1= [];
gdjs.GAME_32STARTCode.GDXButtonObjects2= [];
gdjs.GAME_32STARTCode.GDleaveObjects1= [];
gdjs.GAME_32STARTCode.GDleaveObjects2= [];


gdjs.GAME_32STARTCode.asyncCallback18273436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("LargePlayButton"), gdjs.GAME_32STARTCode.GDLargePlayButtonObjects2);

{for(var i = 0, len = gdjs.GAME_32STARTCode.GDLargePlayButtonObjects2.length ;i < len;++i) {
    gdjs.GAME_32STARTCode.GDLargePlayButtonObjects2[i].returnVariable(gdjs.GAME_32STARTCode.GDLargePlayButtonObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}gdjs.GAME_32STARTCode.localVariables.length = 0;
}
gdjs.GAME_32STARTCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
for (const obj of gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1) asyncObjectsList.addObject("LargePlayButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.GAME_32STARTCode.asyncCallback18273436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32STARTCode.asyncCallback18274580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("LargePlayButton"), gdjs.GAME_32STARTCode.GDLargePlayButtonObjects2);

{for(var i = 0, len = gdjs.GAME_32STARTCode.GDLargePlayButtonObjects2.length ;i < len;++i) {
    gdjs.GAME_32STARTCode.GDLargePlayButtonObjects2[i].returnVariable(gdjs.GAME_32STARTCode.GDLargePlayButtonObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}gdjs.GAME_32STARTCode.localVariables.length = 0;
}
gdjs.GAME_32STARTCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
for (const obj of gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1) asyncObjectsList.addObject("LargePlayButton", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.GAME_32STARTCode.asyncCallback18274580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32STARTCode.asyncCallback18276548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SELETION", false);
}gdjs.GAME_32STARTCode.localVariables.length = 0;
}
gdjs.GAME_32STARTCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.GAME_32STARTCode.asyncCallback18276548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32STARTCode.asyncCallback18277660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SELETION", false);
}gdjs.GAME_32STARTCode.localVariables.length = 0;
}
gdjs.GAME_32STARTCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.GAME_32STARTCode.asyncCallback18277660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32STARTCode.asyncCallback18278484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DESCRIBE", false);
}gdjs.GAME_32STARTCode.localVariables.length = 0;
}
gdjs.GAME_32STARTCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.GAME_32STARTCode.asyncCallback18278484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32STARTCode.asyncCallback18279644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DESCRIBE", false);
}gdjs.GAME_32STARTCode.localVariables.length = 0;
}
gdjs.GAME_32STARTCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.GAME_32STARTCode.asyncCallback18279644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32STARTCode.asyncCallback18280732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DESCRIBE", false);
}gdjs.GAME_32STARTCode.localVariables.length = 0;
}
gdjs.GAME_32STARTCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.GAME_32STARTCode.asyncCallback18280732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32STARTCode.asyncCallback18281876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SELETION", false);
}gdjs.GAME_32STARTCode.localVariables.length = 0;
}
gdjs.GAME_32STARTCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GAME_32STARTCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.GAME_32STARTCode.asyncCallback18281876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GAME_32STARTCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "BGM1.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LargePlayButton"), gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[i].getVariableNumber(gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[k] = gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[i];
        ++k;
    }
}
gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1 */
{for(var i = 0, len = gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1.length ;i < len;++i) {
    gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1.15, "linear", 0.75, false, false);
}
}
{ //Subevents
gdjs.GAME_32STARTCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LargePlayButton"), gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[i].getVariableNumber(gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[k] = gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[i];
        ++k;
    }
}
gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1 */
{for(var i = 0, len = gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1.length ;i < len;++i) {
    gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1, "linear", 0.75, false, false);
}
}
{ //Subevents
gdjs.GAME_32STARTCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LargePlayButton"), gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[k] = gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[i];
        ++k;
    }
}
gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1 */
{for(var i = 0, len = gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1.length ;i < len;++i) {
    gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[i].getBehavior("Tween").addObjectScaleTween3("", 1.3, "linear", 0.25, false, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LargePlayButton"), gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[k] = gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1[i];
        ++k;
    }
}
gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.GAME_32STARTCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18277292);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.GAME_32STARTCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LetterKey"), gdjs.GAME_32STARTCode.GDLetterKeyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32STARTCode.GDLetterKeyObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32STARTCode.GDLetterKeyObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32STARTCode.GDLetterKeyObjects1[k] = gdjs.GAME_32STARTCode.GDLetterKeyObjects1[i];
        ++k;
    }
}
gdjs.GAME_32STARTCode.GDLetterKeyObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.GAME_32STARTCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18279252);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.GAME_32STARTCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18280364);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.GAME_32STARTCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18280892);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按鍵.mp3", false, 100, 1);
}
{ //Subevents
gdjs.GAME_32STARTCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("XButton"), gdjs.GAME_32STARTCode.GDXButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32STARTCode.GDXButtonObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32STARTCode.GDXButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32STARTCode.GDXButtonObjects1[k] = gdjs.GAME_32STARTCode.GDXButtonObjects1[i];
        ++k;
    }
}
gdjs.GAME_32STARTCode.GDXButtonObjects1.length = k;
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

gdjs.GAME_32STARTCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAME_32STARTCode.GDobgObjects1.length = 0;
gdjs.GAME_32STARTCode.GDobgObjects2.length = 0;
gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1.length = 0;
gdjs.GAME_32STARTCode.GDLargePlayButtonObjects2.length = 0;
gdjs.GAME_32STARTCode.GDNOOBObjects1.length = 0;
gdjs.GAME_32STARTCode.GDNOOBObjects2.length = 0;
gdjs.GAME_32STARTCode.GDNewSpriteObjects1.length = 0;
gdjs.GAME_32STARTCode.GDNewSpriteObjects2.length = 0;
gdjs.GAME_32STARTCode.GDLetterKeyObjects1.length = 0;
gdjs.GAME_32STARTCode.GDLetterKeyObjects2.length = 0;
gdjs.GAME_32STARTCode.GDBrownBoxObjects1.length = 0;
gdjs.GAME_32STARTCode.GDBrownBoxObjects2.length = 0;
gdjs.GAME_32STARTCode.GDDESCRIBEObjects1.length = 0;
gdjs.GAME_32STARTCode.GDDESCRIBEObjects2.length = 0;
gdjs.GAME_32STARTCode.GDNewTextObjects1.length = 0;
gdjs.GAME_32STARTCode.GDNewTextObjects2.length = 0;
gdjs.GAME_32STARTCode.GDscoreObjects1.length = 0;
gdjs.GAME_32STARTCode.GDscoreObjects2.length = 0;
gdjs.GAME_32STARTCode.GDXButtonObjects1.length = 0;
gdjs.GAME_32STARTCode.GDXButtonObjects2.length = 0;
gdjs.GAME_32STARTCode.GDleaveObjects1.length = 0;
gdjs.GAME_32STARTCode.GDleaveObjects2.length = 0;

gdjs.GAME_32STARTCode.eventsList8(runtimeScene);
gdjs.GAME_32STARTCode.GDobgObjects1.length = 0;
gdjs.GAME_32STARTCode.GDobgObjects2.length = 0;
gdjs.GAME_32STARTCode.GDLargePlayButtonObjects1.length = 0;
gdjs.GAME_32STARTCode.GDLargePlayButtonObjects2.length = 0;
gdjs.GAME_32STARTCode.GDNOOBObjects1.length = 0;
gdjs.GAME_32STARTCode.GDNOOBObjects2.length = 0;
gdjs.GAME_32STARTCode.GDNewSpriteObjects1.length = 0;
gdjs.GAME_32STARTCode.GDNewSpriteObjects2.length = 0;
gdjs.GAME_32STARTCode.GDLetterKeyObjects1.length = 0;
gdjs.GAME_32STARTCode.GDLetterKeyObjects2.length = 0;
gdjs.GAME_32STARTCode.GDBrownBoxObjects1.length = 0;
gdjs.GAME_32STARTCode.GDBrownBoxObjects2.length = 0;
gdjs.GAME_32STARTCode.GDDESCRIBEObjects1.length = 0;
gdjs.GAME_32STARTCode.GDDESCRIBEObjects2.length = 0;
gdjs.GAME_32STARTCode.GDNewTextObjects1.length = 0;
gdjs.GAME_32STARTCode.GDNewTextObjects2.length = 0;
gdjs.GAME_32STARTCode.GDscoreObjects1.length = 0;
gdjs.GAME_32STARTCode.GDscoreObjects2.length = 0;
gdjs.GAME_32STARTCode.GDXButtonObjects1.length = 0;
gdjs.GAME_32STARTCode.GDXButtonObjects2.length = 0;
gdjs.GAME_32STARTCode.GDleaveObjects1.length = 0;
gdjs.GAME_32STARTCode.GDleaveObjects2.length = 0;


return;

}

gdjs['GAME_32STARTCode'] = gdjs.GAME_32STARTCode;
