/*
 * This provides an implementation of the BOM class com.example.fnolprocess.FNOLProcess.FraudManagementProcess. 
 */
bpm.data.Loader.classDefiner["com.example.fnolprocess.FNOLProcess.FraudManagementProcess"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.example.fnolprocess.FNOLProcess.FraudManagementProcess");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_UPDATECLAIM = "UpdateClaim";
    theClass.ATTR_ORIGINALCLAIM = "OriginalClaim";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_UPDATECLAIM] = {
        type: "com.fnoldata.Claim",
        baseType: "com.fnoldata.Claim",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ORIGINALCLAIM] = {
        type: "com.fnoldata.Claim",
        baseType: "com.fnoldata.Claim",
        primitive: false,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.example.fnolprocess.FNOLProcess.FraudManagementProcess"]();

bpm.scriptUtil._internal.checkVersionCompatibility("FraudManagementProcess.js", "11.0.0.044");
