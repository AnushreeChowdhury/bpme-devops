/*
 * This provides an implementation of the BOM class com.example.fnolmaintenance.FNOLMaintenance.DeleteClaim. 
 */
bpm.data.Loader.classDefiner["com.example.fnolmaintenance.FNOLMaintenance.DeleteClaim"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.example.fnolmaintenance.FNOLMaintenance.DeleteClaim");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_CLAIMREF = "ClaimRef";
    theClass.ATTR_ERRORCODE = "ErrorCode";
    theClass.ATTR_ERRORDETAIL = "ErrorDetail";
    theClass.ATTR_CASEOUTOFSYNCHERROR = "CaseOutOfSynchError";
    theClass.ATTR_CLAIM = "Claim";
    theClass.ATTR_CASENOTFOUND = "CaseNotFound";

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
    theClass.TYPE_ARRAY[theClass.ATTR_ERRORCODE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ERRORDETAIL] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 250
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CASEOUTOFSYNCHERROR] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 150
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

bpm.data.Loader.classDefiner["com.example.fnolmaintenance.FNOLMaintenance.DeleteClaim"]();

bpm.scriptUtil._internal.checkVersionCompatibility("DeleteClaim.js", "11.0.0.044");