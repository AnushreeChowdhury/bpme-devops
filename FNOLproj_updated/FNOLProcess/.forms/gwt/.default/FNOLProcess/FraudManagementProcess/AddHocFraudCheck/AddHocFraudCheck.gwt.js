

if (typeof(tibcoforms) == 'undefined') tibcoforms = new Object();
if (typeof(tibcoforms.formCode) == 'undefined') tibcoforms.formCode = new Object();
tibcoforms.formCode['_52dXwPn3Eeuuh9nQQEuk5Q'] = new Object();
tibcoforms.formCode['_52dXwPn3Eeuuh9nQQEuk5Q']['defineActions'] = function() {
var fc = tibcoforms.formCode['_52dXwPn3Eeuuh9nQQEuk5Q'];
    fc['rule_cancel'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "cancel", "cancel", fc['action_cancel']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(cancel) Error: " + e);
           throw e;
       }
    }

    fc['rule_close'] = function(formId, context, thisObj) {
       try {
            bpm.forms.Util.handleScriptAction.call(thisObj, formId, context, thisObj, "close", "close", fc['action_close']);
       } catch(e) {
           tibcoforms.bridge.log_error("Rule(close) Error: " + e);
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
tibcoforms.formCode['_52dXwPn3Eeuuh9nQQEuk5Q']['defineActions']();

tibcoforms.formCode['_52dXwPn3Eeuuh9nQQEuk5Q']['defineValidations'] = function() {
var fc = tibcoforms.formCode['_52dXwPn3Eeuuh9nQQEuk5Q'];
    
    
    
    
fc['validation_OriginalClaim_descriptionOfLoss_OriginalClaim_descriptionOfLoss__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "OriginalClaim_descriptionOfLoss__length", true, true);
}
    
    
fc['validation_UpdateClaim_descriptionOfLoss_UpdateClaim_descriptionOfLoss__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "UpdateClaim_descriptionOfLoss__length", true, true);
}
    
    
    
fc['validation_OriginalClaim_claimId_OriginalClaim_claimId__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "OriginalClaim_claimId__length", true, true);
}
    
fc['validation_OriginalClaim_timeofincident_OriginalClaim_timeofincident__datetime'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkDateTimeFormat(context.stringValue) ?  true : [context.control.label ? context.control.label : context.control.name] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "OriginalClaim_timeofincident__datetime", true, true);
}
    
    
fc['validation_UpdateClaim_claimamount_UpdateClaim_claimamount__float'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\'? context.value !== \'\' && !isNaN(context.value) ? true : [context.control.label ? context.control.label : context.control.name] : context.value !== \'\' && !isNaN(context.value);';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "UpdateClaim_claimamount__float", true, true);
}
    
    
    
    
fc['validation_OriginalClaim_claimamount_OriginalClaim_claimamount__float'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\'? context.value !== \'\' && !isNaN(context.value) ? true : [context.control.label ? context.control.label : context.control.name] : context.value !== \'\' && !isNaN(context.value);';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "OriginalClaim_claimamount__float", true, true);
}
    
fc['validation_UpdateClaim_claimId_UpdateClaim_claimId__length'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkTextLength(context.stringValue, 50) ? true : [context.control.label ? context.control.label : context.control.name, \'50\'] : context.value.length <= 50;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "UpdateClaim_claimId__length", true, true);
}
    
fc['validation_UpdateClaim_timeofincident_UpdateClaim_timeofincident__datetime'] = function(formId, controlName, cloneUID, listIndex) {
    var valScr = 'typeof context.stringValue != \'undefined\' && typeof bpm.forms.Util != \'undefined\' ? bpm.forms.Util.checkDateTimeFormat(context.stringValue) ?  true : [context.control.label ? context.control.label : context.control.name] : true;';
    return bpm.forms.Util.handleInlineValidation.call(this, formId, this, cloneUID, listIndex, valScr, "UpdateClaim_timeofincident__datetime", true, true);
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
        Object.defineProperty(this, 'UpdateClaim', {
            get: function() {
                return this.form.dataMap['UpdateClaim'].value;
            },
            set: function(value) {
                this.form.dataMap['UpdateClaim'].value = value;
            },
            enumerable: true
        });
        Object.defineProperty(this, 'OriginalClaim', {
            get: function() {
                return this.form.dataMap['OriginalClaim'].value;
            },
            set: function(value) {
                this.form.dataMap['OriginalClaim'].value = value;
            },
            enumerable: true
        });
    }
       
            
            
       
       
};
tibcoforms.formCode['_52dXwPn3Eeuuh9nQQEuk5Q']['defineValidations']();
