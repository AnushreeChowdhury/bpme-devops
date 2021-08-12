/*
 * This provides an implementation of the BOM class com.example.fnolprocess.FNOLProcess.HandleSettlementProcess. 
 */
bpm.data.Loader.classDefiner["com.example.fnolprocess.FNOLProcess.HandleSettlementProcess"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.example.fnolprocess.FNOLProcess.HandleSettlementProcess");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);

    theClass.TYPE_ARRAY = {};

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.example.fnolprocess.FNOLProcess.HandleSettlementProcess"]();

bpm.scriptUtil._internal.checkVersionCompatibility("HandleSettlementProcess.js", "11.0.0.044");
