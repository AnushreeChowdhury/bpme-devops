/*
 * This provides an implementation of the BOM class com.example.fnolmaintenance.FNOLMaintenance.FNOLCreatePolicy. 
 */
bpm.data.Loader.classDefiner["com.example.fnolmaintenance.FNOLMaintenance.FNOLCreatePolicy"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.example.fnolmaintenance.FNOLMaintenance.FNOLCreatePolicy");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_POLICYHOLDER = "PolicyHolder";
    theClass.ATTR_POLICY = "Policy";
    theClass.ATTR_POLICYREF = "PolicyRef";
    theClass.ATTR_POLICYHOLDERREF = "PolicyHolderRef";
    theClass.ATTR_POLICYHOLDERREFS = "PolicyHolderRefs";
    theClass.ATTR_ENTERANOTHERPOLICY = "EnterAnotherPolicy";
    theClass.ATTR_SECONDNAME = "SecondName";
    theClass.ATTR_POSTCODE = "PostCode";

    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_POLICYHOLDER] = {
        type: "com.fnoldata.Policyholder",
        baseType: "com.fnoldata.Policyholder",
        primitive: false,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_POLICY] = {
        type: "com.fnoldata.Policy",
        baseType: "com.fnoldata.Policy",
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
    theClass.TYPE_ARRAY[theClass.ATTR_POLICYHOLDERREFS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: true,
        required: false,
        defaultValue: "",
        length: -1
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ENTERANOTHERPOLICY] = {
        type: "BomPrimitiveTypes.Boolean",
        baseType: "BomPrimitiveTypes.Boolean",
        primitive: true,
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

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.example.fnolmaintenance.FNOLMaintenance.FNOLCreatePolicy"]();

bpm.scriptUtil._internal.checkVersionCompatibility("FNOLCreatePolicy.js", "11.0.0.044");
