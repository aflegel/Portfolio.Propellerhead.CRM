import { Component, Input, ViewContainerRef, ViewChild, OnInit } from "@angular/core";
import { ValidatorFn, AbstractControl } from "@angular/forms"

export function MaximumValue(max: Number): ValidatorFn {
	return (control: AbstractControl): { [key: string]: any } => {
		const isInvalid = control.value > max;

		return isInvalid ? { "MaximumValue": { value: control.value } } : null

	};
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
	return (control: AbstractControl): { [key: string]: any } => {
		const forbidden = nameRe.test(control.value);
		return forbidden ? { 'forbiddenName': { value: control.value } } : null;
	};
}

export function MinimumValue(min: Number): ValidatorFn {
	return (control: AbstractControl): { [key: string]: any } => {
		const isInvalid = control.value < min;

		return isInvalid ? { "MinimumValue": { value: control.value } } : null
	};
}

export function OrRequired(optional: any): ValidatorFn {
	return (control: AbstractControl): { [key: string]: any } => {

		var isInvalid: boolean = true;
		if (control.value != null) {
			//this has a value and is valid
			isInvalid = false;
		} else if (optional != null) {
			//the other field has a value and is valid
			isInvalid = false;
		} else {
			//neither fields have values and is invalid
			isInvalid = true;
		}
		return isInvalid ? { "OrRequired": { value: control.value } } : null
	};
}

export function NgClassIsValid(validation: AbstractControl): string[] {
	if (validation.invalid)
		return ["is-invalid"];
	else
		return [""];
}