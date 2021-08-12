/*
 * This provides an implementation of the BOM class com.example.fnolmaintenance.FNOLMaintenance.FNOLCreatePolicyholder. 
 */
bpm.data.Loader.classDefiner["com.example.fnolmaintenance.FNOLMaintenance.FNOLCreatePolicyholder"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.example.fnolmaintenance.FNOLMaintenance.FNOLCreatePolicyholder");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_POLICYHOLDER = "PolicyHolder";
    theClass.ATTR_POLICYHOLDERREF = "PolicyHolderRef";

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

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.example.fnolmaintenance.FNOLMaintenance.FNOLCreatePolicyholder"]();

bpm.scriptUtil._internal.checkVersionCompatibility("FNOLCreatePolicyholder.js", "11.0.0.044");
