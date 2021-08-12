

if (typeof(tibcoforms) == 'undefined') tibcoforms = new Object();
if (typeof(tibcoforms.formCode) == 'undefined') tibcoforms.formCode = new Object();
tibcoforms.formCode['_3GX1wPn3Eeuuh9nQQEuk5Q'] = new Object();
tibcoforms.formCode['_3GX1wPn3Eeuuh9nQQEuk5Q']['defineActions'] = function() {
var fc = tibcoforms.formCode['_3GX1wPn3Eeuuh9nQQEuk5Q'];
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
tibcoforms.formCode['_3GX1wPn3Eeuuh9nQQEuk5Q']['defineActions']();

tibcoforms.formCode['_3GX1wPn3Eeuuh9nQQEuk5Q']['defineValidations'] = function() {
var fc = tibcoforms.formCode['_3GX1wPn3Eeuuh9nQQEuk5Q'];
    
    
fc['validation_Policy_vehicleValue_Policy_vehicleValue__float'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\'? context.value !== \'\' && !isNaN(context.value) ? true : [context.control.label ? context.control.label : context.control.name] : context.value !== \'\' && !isNaN(context.value);';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policy_vehicleValue__float", true, true);
}
    
    
    
fc['validation_Policy_startDate_Policy_startDate__datetime'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkDateFormat(context.stringValue) ?  true : [context.control.label ? context.control.label : context.control.name] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policy_startDate__datetime", true, true);
}
    
fc['validation_Policy_manufacturer_Policy_manufacturer__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policy_manufacturer__length", true, true);
}
    
    
fc['validation_Policy_policyId_Policy_policyId__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policy_policyId__length", true, true);
}
    
fc['validation_Policy_vehicleRegistration_Policy_vehicleRegistration__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policy_vehicleRegistration__length", true, true);
}
    
    
fc['validation_Policy_durationMonths_Policy_durationMonths__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policy_durationMonths__length", true, true);
}
    
    
fc['validation_Policy_model_Policy_model__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policy_model__length", true, true);
}
    
fc['validation_Policy_excess_Policy_excess__float'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\'? context.value !== \'\' && !isNaN(context.value) ? true : [context.control.label ? context.control.label : context.control.name] : context.value !== \'\' && !isNaN(context.value);';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "Policy_excess__float", true, true);
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
        Object.defineProperty(this, 'Policy', {
            get: function() {
                return this.form.dataMap['Policy'].value;
            },
            set: function(value) {
                this.form.dataMap['Policy'].value = value;
            },
            enumerable: true
        });
    }
       
            
       
       
};
tibcoforms.formCode['_3GX1wPn3Eeuuh9nQQEuk5Q']['defineValidations']();
