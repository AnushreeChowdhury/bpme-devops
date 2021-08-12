/*
 * This provides an implementation of the BOM class com.example.fnolprocess.FNOLProcess.AgentUpdateClaim. 
 */
bpm.data.Loader.classDefiner["com.example.fnolprocess.FNOLProcess.AgentUpdateClaim"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.example.fnolprocess.FNOLProcess.AgentUpdateClaim");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_POLICYHOLDERREFS = "PolicyHolderRefs";
    theClass.ATTR_POSTCODE = "PostCode";
    theClass.ATTR_POLICYHOLDERREF = "PolicyHolderRef";
    theClass.ATTR_POLICYHOLDER = "PolicyHolder";
    theClass.ATTR_SECONDNAME = "SecondName";
    theClass.ATTR_POLICYREFS = "PolicyRefs";
    theClass.ATTR_POLICIES = "Policies";
    theClass.ATTR_INDEX = "Index";
    theClass.ATTR_POLICYREF = "PolicyRef";
    theClass.ATTR_CLAIMREFS = "ClaimRefs";
    theClass.ATTR_CLAIMREF = "claimRef";
    theClass.ATTR_CLAIMS = "Claims";
    theClass.ATTR_CLAIM = "Claim";
    theClass.ATTR_ADDCOUNTERPARTY = "AddCounterparty";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_POLICYHOLDERREFS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: true,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_POSTCODE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_POLICYHOLDERREF] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_POLICYHOLDER] = {
        type: "com.fnoldata.Policyholder",
        baseType: "com.fnoldata.Policyholder",
        primitive: false,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SECONDNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_POLICYREFS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: true,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_POLICIES] = {
        type: "com.fnoldata.Policy",
        baseType: "com.fnoldata.Policy",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
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
    theClass.TYPE_ARRAY[theClass.ATTR_CLAIMREFS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: true,
        required: false,
        defaultValue: "",
        length: -1
    };
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
    theClass.TYPE_ARRAY[theClass.ATTR_CLAIMS] = {
        type: "com.fnoldata.Claim",
        baseType: "com.fnoldata.Claim",
        primitive: false,
        multivalued: true,
        required: false,
        defaultValue: ""
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
    theClass.TYPE_ARRAY[theClass.ATTR_ADDCOUNTERPARTY] = {
        type: "BomPrimitiveTypes.Boolean",
        baseType: "BomPrimitiveTypes.Boolean",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.example.fnolprocess.FNOLProcess.AgentUpdateClaim"]();

bpm.scriptUtil._internal.checkVersionCompatibility("AgentUpdateClaim.js", "11.0.0.044");
