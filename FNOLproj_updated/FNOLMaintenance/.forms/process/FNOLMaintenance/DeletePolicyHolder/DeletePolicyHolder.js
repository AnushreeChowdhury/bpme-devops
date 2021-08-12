/*
 * This provides an implementation of the BOM class com.example.fnolmaintenance.FNOLMaintenance.DeletePolicyHolder. 
 */
bpm.data.Loader.classDefiner["com.example.fnolmaintenance.FNOLMaintenance.DeletePolicyHolder"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.example.fnolmaintenance.FNOLMaintenance.DeletePolicyHolder");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_POLICYHOLDERREF = "PolicyholderRef";
    theClass.ATTR_POLICYHOLDER = "Policyholder";
    theClass.ATTR_CASENOTFOUND = "CaseNotFound";

    theClass.TYPE_ARRAY = {};
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
    theClass.TYPE_ARRAY[theClass.ATTR_CASENOTFOUND] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 100
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.example.fnolmaintenance.FNOLMaintenance.DeletePolicyHolder"]();

bpm.scriptUtil._internal.checkVersionCompatibility("DeletePolicyHolder.js", "11.0.0.044");
