"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MaximumValue(max) {
    return (control) => {
        const isInvalid = control.value > max;
        return isInvalid ? { "MaximumValue": { value: control.value } } : null;
    };
}
exports.MaximumValue = MaximumValue;
function forbiddenNameValidator(nameRe) {
    return (control) => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}
exports.forbiddenNameValidator = forbiddenNameValidator;
function MinimumValue(min) {
    return (control) => {
        const isInvalid = control.value < min;
        return isInvalid ? { "MinimumValue": { value: control.value } } : null;
    };
}
exports.MinimumValue = MinimumValue;
function OrRequired(optional) {
    return (control) => {
        var isInvalid = true;
        if (control.value != null) {
            //this has a value and is valid
            isInvalid = false;
        }
        else if (optional != null) {
            //the other field has a value and is valid
            isInvalid = false;
        }
        else {
            //neither fields have values and is invalid
            isInvalid = true;
        }
        return isInvalid ? { "OrRequired": { value: control.value } } : null;
    };
}
exports.OrRequired = OrRequired;
function NgClassIsValid(validation) {
    if (validation.invalid)
        return ["is-invalid"];
    else
        return [""];
}
exports.NgClassIsValid = NgClassIsValid;
//# sourceMappingURL=TextboxValidators.js.map