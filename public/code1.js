gdjs.DESCRIBECode = {};
gdjs.DESCRIBECode.localVariables = [];
gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1= [];
gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects2= [];
gdjs.DESCRIBECode.GDscoreObjects1= [];
gdjs.DESCRIBECode.GDscoreObjects2= [];
gdjs.DESCRIBECode.GDXButtonObjects1= [];
gdjs.DESCRIBECode.GDXButtonObjects2= [];
gdjs.DESCRIBECode.GDleaveObjects1= [];
gdjs.DESCRIBECode.GDleaveObjects2= [];
gdjs.DESCRIBECode.GDplayernameObjects1= [];
gdjs.DESCRIBECode.GDplayernameObjects2= [];


gdjs.DESCRIBECode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DESCRIBEPICTURE"), gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1);
{for(var i = 0, len = gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1.length ;i < len;++i) {
    gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i].returnVariable(gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DESCRIBEPICTURE"), gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1.length;i<l;++i) {
    if ( gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i].getVariableNumber(gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[k] = gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i];
        ++k;
    }
}
gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1 */
{for(var i = 0, len = gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1.length ;i < len;++i) {
    gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i].getBehavior("Animation").setAnimationName("11");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18347388);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DESCRIBEPICTURE"), gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1);
{for(var i = 0, len = gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1.length ;i < len;++i) {
    gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i].returnVariable(gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18348156);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DESCRIBEPICTURE"), gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1);
{for(var i = 0, len = gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1.length ;i < len;++i) {
    gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i].returnVariable(gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DESCRIBEPICTURE"), gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1.length;i<l;++i) {
    if ( gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i].getVariableNumber(gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[k] = gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i];
        ++k;
    }
}
gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1 */
{for(var i = 0, len = gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1.length ;i < len;++i) {
    gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i].getBehavior("Animation").setAnimationName("22");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DESCRIBEPICTURE"), gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1.length;i<l;++i) {
    if ( gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i].getVariableNumber(gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[k] = gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1[i];
        ++k;
    }
}
gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAME START", false);
}}

}


};

gdjs.DESCRIBECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1.length = 0;
gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects2.length = 0;
gdjs.DESCRIBECode.GDscoreObjects1.length = 0;
gdjs.DESCRIBECode.GDscoreObjects2.length = 0;
gdjs.DESCRIBECode.GDXButtonObjects1.length = 0;
gdjs.DESCRIBECode.GDXButtonObjects2.length = 0;
gdjs.DESCRIBECode.GDleaveObjects1.length = 0;
gdjs.DESCRIBECode.GDleaveObjects2.length = 0;
gdjs.DESCRIBECode.GDplayernameObjects1.length = 0;
gdjs.DESCRIBECode.GDplayernameObjects2.length = 0;

gdjs.DESCRIBECode.eventsList0(runtimeScene);
gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects1.length = 0;
gdjs.DESCRIBECode.GDDESCRIBEPICTUREObjects2.length = 0;
gdjs.DESCRIBECode.GDscoreObjects1.length = 0;
gdjs.DESCRIBECode.GDscoreObjects2.length = 0;
gdjs.DESCRIBECode.GDXButtonObjects1.length = 0;
gdjs.DESCRIBECode.GDXButtonObjects2.length = 0;
gdjs.DESCRIBECode.GDleaveObjects1.length = 0;
gdjs.DESCRIBECode.GDleaveObjects2.length = 0;
gdjs.DESCRIBECode.GDplayernameObjects1.length = 0;
gdjs.DESCRIBECode.GDplayernameObjects2.length = 0;


return;

}

gdjs['DESCRIBECode'] = gdjs.DESCRIBECode;
