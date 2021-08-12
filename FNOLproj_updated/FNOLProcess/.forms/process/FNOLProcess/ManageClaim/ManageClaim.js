/*
 * This provides an implementation of the BOM class com.example.fnolprocess.FNOLProcess.ManageClaim. 
 */
bpm.data.Loader.classDefiner["com.example.fnolprocess.FNOLProcess.ManageClaim"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.example.fnolprocess.FNOLProcess.ManageClaim");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_CLAIMREF = "claimRef";

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

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.example.fnolprocess.FNOLProcess.ManageClaim"]();

bpm.scriptUtil._internal.checkVersionCompatibility("ManageClaim.js", "11.0.0.044");
