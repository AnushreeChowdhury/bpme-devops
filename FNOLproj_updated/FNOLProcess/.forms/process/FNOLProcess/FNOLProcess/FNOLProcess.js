/*
 * This provides an implementation of the BOM class com.example.fnolprocess.FNOLProcess.FNOLProcess. 
 */
bpm.data.Loader.classDefiner["com.example.fnolprocess.FNOLProcess.FNOLProcess"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.example.fnolprocess.FNOLProcess.FNOLProcess");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_CLAIMREF = "claimRef";
    theClass.ATTR_CLAIM = "Claim";
    theClass.ATTR_CLAIMID = "ClaimId";
    theClass.ATTR_UPDATEDCLAIM = "UpdatedClaim";
    theClass.ATTR_ORIGINALCLAIM = "OriginalClaim";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_CLAIMREF] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLAIM] = {
        type: "com.fnoldata.Claim",
        baseType: "com.fnoldata.Claim",
        primitive: false,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLAIMID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_UPDATEDCLAIM] = {
        type: "com.fnoldata.Claim",
        baseType: "com.fnoldata.Claim",
        primitive: false,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ORIGINALCLAIM] = {
        type: "com.fnoldata.Claim",
        baseType: "com.fnoldata.Claim",
        primitive: false,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.example.fnolprocess.FNOLProcess.FNOLProcess"]();

bpm.scriptUtil._internal.checkVersionCompatibility("FNOLProcess.js", "11.0.0.044");
