/*
 * This provides an implementation of the BOM class com.example.fnolprocess.FNOLProcess.AddCounterpartytoClaim. 
 */
bpm.data.Loader.classDefiner["com.example.fnolprocess.FNOLProcess.AddCounterpartytoClaim"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.example.fnolprocess.FNOLProcess.AddCounterpartytoClaim");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_CLAIMREF = "ClaimRef";
    theClass.ATTR_ADDCOUNTERPARTY = "AddCounterparty";
    theClass.ATTR_COUNTERPARTY = "Counterparty";
    theClass.ATTR_COUNTERPARTYREF = "CounterpartyRef";

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
    theClass.TYPE_ARRAY[theClass.ATTR_ADDCOUNTERPARTY] = {
        type: "BomPrimitiveTypes.Boolean",
        baseType: "BomPrimitiveTypes.Boolean",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_COUNTERPARTY] = {
        type: "com.fnoldata.Counterparty",
        baseType: "com.fnoldata.Counterparty",
        primitive: false,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_COUNTERPARTYREF] = {
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

bpm.data.Loader.classDefiner["com.example.fnolprocess.FNOLProcess.AddCounterpartytoClaim"]();

bpm.scriptUtil._internal.checkVersionCompatibility("AddCounterpartytoClaim.js", "11.0.0.044");
