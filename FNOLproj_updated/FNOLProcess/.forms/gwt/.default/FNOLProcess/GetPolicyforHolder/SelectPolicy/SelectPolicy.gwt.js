

if (typeof(tibcoforms) == 'undefined') tibcoforms = new Object();
if (typeof(tibcoforms.formCode) == 'undefined') tibcoforms.formCode = new Object();
tibcoforms.formCode['_5psHEPn3Eeuuh9nQQEuk5Q'] = new Object();
tibcoforms.formCode['_5psHEPn3Eeuuh9nQQEuk5Q']['defineActions'] = function() {
var fc = tibcoforms.formCode['_5psHEPn3Eeuuh9nQQEuk5Q'];
    fc['rule_cancel'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "cancel", "cancel", fc['action_cancel']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(cancel) Error: " + e);
           throw e;
       }
    }

    fc['rule_submit'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "submit", "submit", fc['action_submit']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(submit) Error: " + e);
           throw e;
       }
    }

    fc['action_cancel'] = function(context, data, pane, control, factory, pkg, f , p) {
        context.form.invokeAction('cancel');
    }

    fc['action_apply'] = function(context, data, pane, control, factory, pkg, f , p) {
        context.form.invokeAction('apply');
    }
    
    fc['action_close'] = function(context, data, pane, control, factory, pkg, f , p) {
        context.form.invokeAction('close');
    }

    fc['action_submit'] = function(context, data, pane, control, factory, pkg, f , p) {
        context.form.invokeAction('submit');
    }
    
    fc['action_validate'] = function(context, data, pane, control, factory, pkg, f , p) {
        context.form.invokeAction('validate');
    }
    
    fc['action_reset'] = function(context, data, pane, control, factory, pkg, f , p) {
        context.form.invokeAction('reset');
    }
    
    fc['generator_info'] = function() {
        return "TIBCO Forms for ACE Runtime 11.0.0.045";
    }
};
tibcoforms.formCode['_5psHEPn3Eeuuh9nQQEuk5Q']['defineActions']();

tibcoforms.formCode['_5psHEPn3Eeuuh9nQQEuk5Q']['defineValidations'] = function() {
var fc = tibcoforms.formCode['_5psHEPn3Eeuuh9nQQEuk5Q'];
    
    
fc['validation_Policies_manufacturer_Policies_manufacturer__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policies_manufacturer__length", true, true);
}
    
fc['validation_Index_Index__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkNumberConstraint(context.stringValue, 10, 0) ? true : [context.control.label ? context.control.label : context.control.name, \'10\'] : !isNaN(context.value) && context.form.numberFormat(context.value,10, 0);';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Index__length", true, true);
}
    
fc['validation_Policies_startDate_Policies_startDate__datetime'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkDateFormat(context.stringValue) ?  true : [context.control.label ? context.control.label : context.control.name] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policies_startDate__datetime", true, true);
}
    
fc['validation_Policies_vehicleValue_Policies_vehicleValue__float'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\'? context.value !== \'\' && !isNaN(context.value) ? true : [context.control.label ? context.control.label : context.control.name] : context.value !== \'\' && !isNaN(context.value);';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policies_vehicleValue__float", true, true);
}
    
    
fc['validation_Policies_durationMonths_Policies_durationMonths__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policies_durationMonths__length", true, true);
}
    
fc['validation_Policies_model_Policies_model__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policies_model__length", true, true);
}
    
fc['validation_Policies_vehicleRegistration_Policies_vehicleRegistration__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policies_vehicleRegistration__length", true, true);
}
    
    
    
fc['validation_Policies_policyId_Policies_policyId__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policies_policyId__length", true, true);
}
    
    
    
fc['validation_Policies_excess_Policies_excess__float'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\'? context.value !== \'\' && !isNaN(context.value) ? true : [context.control.label ? context.control.label : context.control.name] : context.value !== \'\' && !isNaN(context.value);';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policies_excess__float", true, true);
}
    
    fc['validate_required'] = function(formId, controlName, cloneUID, listIndex) {
        return bpm.forms.Util.handleRequiredValidation.call(this, formId, controlName, cloneUID, listIndex);
    }
    fc['register_pkgs_and_fcts'] = function(formId) {
       var form = tibcoforms.formCache[formId];
       form.registerPackages(['com.fnoldata.FnoldataPackage']);
       form.registerFactories(['com.fnoldata.FnoldataFactory']);
    }
    fc['DataModel'] = function(formId) {
        if (this.form) return;
        this.form = tibcoforms.formCache[formId];
        Object.defineProperty(this, 'Policies', {
            get: function() {
                return this.form.dataMap['Policies'].value;
            },
            set: function(value) {
                throw "Cannot assign value to a multi-valued parameter/datafield.";
            },
            enumerable: true
        });
        Object.defineProperty(this, 'Index', {
            get: function() {
                return this.form.dataMap['Index'].value;
            },
            set: function(value) {
                this.form.dataMap['Index'].value = value;
            },
            enumerable: true
        });
    }
       
            
       
       
};
tibcoforms.formCode['_5psHEPn3Eeuuh9nQQEuk5Q']['defineValidations']();
