import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MinimumValue, MaximumValue, NgClassIsValid } from "../Framework/TextboxValidators";
import { ModelState, ModelValidationTools } from "./ModelState";
import { Customer } from "./Customer";

export class Status extends ModelState implements ModelValidationTools {
	constructor(status?: Status) {
		super();

		if (status != null) {
			this.label = status.label;
			this.statusId = status.statusId;
		}
	}

	/**
	 * checks all fields for validity, including children
	 */
	public IsValid(): boolean {
		return true;
	}

	statusId: number;
	label: string;
}