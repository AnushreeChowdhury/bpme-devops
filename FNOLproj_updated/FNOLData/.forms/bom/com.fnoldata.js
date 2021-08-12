/*
 * DO NOT EDIT: This is automatically generated code.
 * This provides an implementation of the BOM package com.fnoldata.FnoldataPackage.
 */

bpm.data.Loader.classDefiner["com.fnoldata.FnoldataPackage"] = function() {
    /** Constructor. */
    var theClass = function() {
    };
    bpm.data.Loader.currentLoader.registerPackage(theClass, "com.fnoldata.FnoldataPackage");

    // Define the enumerations declared by this package.
    theClass.PolicyHolderStates = {"CURRENT":"CURRENT", "HISTORIC":"HISTORIC"};
    theClass.PolicyStates = {"CURRENT":"CURRENT", "EXPIRED":"EXPIRED"};
    theClass.ClaimStates = {"SUBMITTED":"SUBMITTED", "APPROVED":"APPROVED", "PAID":"PAID", "REJECTED":"REJECTED", "FINALIZED":"FINALIZED"};
    theClass.CounterpartyStates = {"CURRENT":"CURRENT", "HISTORIC":"HISTORIC"};
};

bpm.scriptUtil._internal.checkVersionCompatibility("com.fnoldata.js", "11.0.0.044");
bpm.data.Loader.classDefiner["com.fnoldata.FnoldataPackage"]();

/*
 * DO NOT EDIT: This is automatically generated code.
 * This provides an implementation of the BOM factory com.fnoldata.FnoldataFactory. 
 */ 

bpm.data.Loader.classDefiner["com.fnoldata.FnoldataFactory"] = function() {
    /** Constructor. */
    var theClass = function(form) {
        this.context = {};
        this.context.form = form;
        if (form.getLogger)
            this.context.logger = form.getLogger();
        this.context.item = null;
        this.context.id = null;
        this.$loader = form._loader;
    };
    bpm.data.Loader.currentLoader.registerFactory(theClass, "com.fnoldata.FnoldataFactory");

    theClass.prototype.SUPPORTED_CLASSES = [
        "com.fnoldata.Policyholder",
        "com.fnoldata.Policy",
        "com.fnoldata.Claim",
        "com.fnoldata.Counterparty"
    ];

    theClass.prototype.checkClassName = function(className) {
        for (var i = 0; i < this.SUPPORTED_CLASSES.length; i++) {
            if (className == this.SUPPORTED_CLASSES[i])
                return;
        };
        throw "Factory com.fnoldata.FnoldataFactory does not support class \"" + className + "\"";
    };

    theClass.prototype.create = function(className, jsonData) {
        this.checkClassName(className);
        var instance = this.$loader.newInstance(className, this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData, this.context);
        return instance;
    };

    theClass.prototype.createPolicyholder = function(jsonData) {
        var instance = this.$loader.newInstance("com.fnoldata.Policyholder", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreatePolicyholder = function(jsonData) {
        var instance = this.$loader.newInstance("com.fnoldata.Policyholder", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createPolicy = function(jsonData) {
        var instance = this.$loader.newInstance("com.fnoldata.Policy", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreatePolicy = function(jsonData) {
        var instance = this.$loader.newInstance("com.fnoldata.Policy", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createClaim = function(jsonData) {
        var instance = this.$loader.newInstance("com.fnoldata.Claim", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateClaim = function(jsonData) {
        var instance = this.$loader.newInstance("com.fnoldata.Claim", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.createCounterparty = function(jsonData) {
        var instance = this.$loader.newInstance("com.fnoldata.Counterparty", this.context);
        if (jsonData != undefined)
            instance = instance._setValue(instance, jsonData);
        return instance;
    };

    theClass.prototype.listCreateCounterparty = function(jsonData) {
        var instance = this.$loader.newInstance("com.fnoldata.Counterparty", this.context);
        return instance._setValueList(instance, jsonData);
    };
    theClass.prototype.getClass = function(className) {
        this.checkClassName(className);
        return this.$loader.getClass(className);
    };
};

bpm.data.Loader.classDefiner["com.fnoldata.FnoldataFactory"]();
/*
 * This provides an implementation of the BOM class com.fnoldata.Claim. 
 */
bpm.data.Loader.classDefiner["com.fnoldata.Claim"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.fnoldata.Claim");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_CLAIMID = "claimId";
    theClass.ATTR_TIMEOFINCIDENT = "timeofincident";
    theClass.ATTR_DESCRIPTIONOFLOSS = "descriptionOfLoss";
    theClass.ATTR_CLAIMAMOUNT = "claimamount";
    theClass.ATTR_CLAIMSTATE = "claimState";

    theClass._isCaseObject = true;
    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_CLAIMID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50, 
		caseIdAuto: true, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_TIMEOFINCIDENT] = {
        type: "BomPrimitiveTypes.DateTimeTZ",
        baseType: "BomPrimitiveTypes.DateTimeTZ",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_DESCRIPTIONOFLOSS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLAIMAMOUNT] = {
        type: "BomPrimitiveTypes.Decimal",
        baseType: "BomPrimitiveTypes.Decimal",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLAIMSTATE] = {
        type: "com.fnoldata.ClaimStates",
        baseType: "com.fnoldata.ClaimStates",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "", 
		isCaseState: true, 
		terminalStates: ["FINALIZED"], 
		isSummary: true, 
		isSearchable: true
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.fnoldata.Claim"]();
/*
 * This provides an implementation of the BOM class com.fnoldata.Policy. 
 */
bpm.data.Loader.classDefiner["com.fnoldata.Policy"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.fnoldata.Policy");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_POLICYID = "policyId";
    theClass.ATTR_STARTDATE = "startDate";
    theClass.ATTR_DURATIONMONTHS = "durationMonths";
    theClass.ATTR_VEHICLEREGISTRATION = "vehicleRegistration";
    theClass.ATTR_MANUFACTURER = "manufacturer";
    theClass.ATTR_MODEL = "model";
    theClass.ATTR_EXCESS = "excess";
    theClass.ATTR_VEHICLEVALUE = "vehicleValue";
    theClass.ATTR_POLICYSTATE = "policyState";

    theClass._isCaseObject = true;
    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_POLICYID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50, 
		caseIdAuto: true, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_STARTDATE] = {
        type: "BomPrimitiveTypes.Date",
        baseType: "BomPrimitiveTypes.Date",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "", 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_DURATIONMONTHS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_VEHICLEREGISTRATION] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MANUFACTURER] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_MODEL] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_EXCESS] = {
        type: "BomPrimitiveTypes.Decimal",
        baseType: "BomPrimitiveTypes.Decimal",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_VEHICLEVALUE] = {
        type: "BomPrimitiveTypes.Decimal",
        baseType: "BomPrimitiveTypes.Decimal",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_POLICYSTATE] = {
        type: "com.fnoldata.PolicyStates",
        baseType: "com.fnoldata.PolicyStates",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "", 
		isCaseState: true, 
		terminalStates: ["EXPIRED"], 
		isSummary: true, 
		isSearchable: true
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.fnoldata.Policy"]();
/*
 * This provides an implementation of the BOM class com.fnoldata.Policyholder. 
 */
bpm.data.Loader.classDefiner["com.fnoldata.Policyholder"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.fnoldata.Policyholder");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_POLICYHOLDERID = "policyHolderId";
    theClass.ATTR_FIRSTNAME = "firstName";
    theClass.ATTR_SECONDNAME = "secondName";
    theClass.ATTR_ADDRESS = "address";
    theClass.ATTR_POSTCODE = "postcode";
    theClass.ATTR_DATEOFBIRTH = "dateOFBirth";
    theClass.ATTR_POLICYHOLDERSTATE = "policyHolderState";

    theClass._isCaseObject = true;
    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_POLICYHOLDERID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50, 
		caseIdAuto: true, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FIRSTNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SECONDNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDRESS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_POSTCODE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_DATEOFBIRTH] = {
        type: "BomPrimitiveTypes.Date",
        baseType: "BomPrimitiveTypes.Date",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "", 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_POLICYHOLDERSTATE] = {
        type: "com.fnoldata.PolicyHolderStates",
        baseType: "com.fnoldata.PolicyHolderStates",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "", 
		isCaseState: true, 
		terminalStates: ["HISTORIC"], 
		isSummary: true, 
		isSearchable: true
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.fnoldata.Policyholder"]();
/*
 * This provides an implementation of the BOM class com.fnoldata.Counterparty. 
 */
bpm.data.Loader.classDefiner["com.fnoldata.Counterparty"] = function() {
    /** Constructor. */
    var theClass = function(context) {
        this._init(theClass, context);
    };

    theClass.LOADER = bpm.data.Loader.currentLoader;
    theClass.LOADER.registerClass(theClass, "com.fnoldata.Counterparty");
    bpm.data.Loader.extendClass(bpm.data.BomBase, theClass);
    theClass.ATTR_COUNTERPARTYID = "counterpartyId";
    theClass.ATTR_FIRSTNAME = "firstName";
    theClass.ATTR_SECONDNAME = "secondName";
    theClass.ATTR_ADDRESS = "address";
    theClass.ATTR_POSTCODE = "postcode";
    theClass.ATTR_DESCRIPTIONOFINCIDENT = "descriptionOfIncident";
    theClass.ATTR_CLAIMAMOUNT = "claimAmount";
    theClass.ATTR_COUNTERPARTYSTATE = "counterpartyState";

    theClass._isCaseObject = true;
    theClass.TYPE_ARRAY = {};
    theClass.TYPE_ARRAY[theClass.ATTR_COUNTERPARTYID] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "",
        length: 50, 
		caseIdAuto: true, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_FIRSTNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_SECONDNAME] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_ADDRESS] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_POSTCODE] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50, 
		isSummary: true, 
		isSearchable: true
    };
    theClass.TYPE_ARRAY[theClass.ATTR_DESCRIPTIONOFINCIDENT] = {
        type: "BomPrimitiveTypes.Text",
        baseType: "BomPrimitiveTypes.Text",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: "",
        length: 50
    };
    theClass.TYPE_ARRAY[theClass.ATTR_CLAIMAMOUNT] = {
        type: "BomPrimitiveTypes.Decimal",
        baseType: "BomPrimitiveTypes.Decimal",
        primitive: true,
        multivalued: false,
        upper: 1,
        required: false,
        defaultValue: ""
    };
    theClass.TYPE_ARRAY[theClass.ATTR_COUNTERPARTYSTATE] = {
        type: "com.fnoldata.CounterpartyStates",
        baseType: "com.fnoldata.CounterpartyStates",
        primitive: true,
        multivalued: false,
        lower: 1,
        upper: 1,
        required: true,
        defaultValue: "", 
		isCaseState: true, 
		terminalStates: ["HISTORIC"], 
		isSummary: true, 
		isSearchable: true
    };

    bpm.data.BomBase.defineProperties(theClass);
};

bpm.data.Loader.classDefiner["com.fnoldata.Counterparty"]();
