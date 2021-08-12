/*
 * This provides an implementation of the BOM class com.example.fnolprocess.FNOLProcess.GetClaimforPolicy. 
 */
bpm.data.Loader.classDefiner["com.example.fnolprocess.FNOLProcess.GetClaimforPolicy"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.example.fnolprocess.FNOLProcess.GetClaimforPolicy");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_CLAIMREF = "ClaimRef";
    theClass.ATTR_CLAIM = "Claim";
    theClass.ATTR_POLICYREF = "PolicyRef";
    theClass.ATTR_CLAIMID = "ClaimId";
    theClass.ATTR_CLAIMREFS = "ClaimRefs";
    theClass.ATTR_INDEX = "Index";
    theClass.ATTR_CLAIMS = "Claims";

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
    theClass.TYPE_ARRAY[theClass.ATTR_POLICYREF] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLAIMID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLAIMREFS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: true,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_INDEX] = {
        type: "BomPrimitiveTypes.Decimal",
        baseType: "BomPrimitiveTypes.Decimal",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 10,
        decimalPlaces: 0

    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLAIMS] = {
        type: "com.fnoldata.Claim",
        baseType: "com.fnoldata.Claim",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.example.fnolprocess.FNOLProcess.GetClaimforPolicy"]();

bpm.scriptUtil._internal.checkVersionCompatibility("GetClaimforPolicy.js", "11.0.0.044");
