import { Component, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

export class ModelValidation {
	constructor() { }

	/**
	 * Function to be superseded that clears out validation and parent objects for serialization
	 */
	public PrepareSave() {
		this.validation = undefined;
	}

	validation: FormGroup;
}

export interface ModelValidationTools {
	InitializeValidation(): void;
	IsValid(): boolean;
}

export class ModelState extends ModelValidation implements ModelValidationTools {
	public InitializeValidation() { }

	/**
	 * Dummy function meant to check if the model is valid
	 */
	public IsValid(): boolean {
		return true;
	}

	/**
	 * Returns a bootstrap css class if the model is invalid
	 */
	public IsValidCss(): string[] {
		if (!this.IsValid())
			return ["table-danger"];
		else
			return [""];
	}

	/**
	 * Returns a bootstrap css class if the model is invalid
	 */
	public NgClassIsValid(): string[] {
		if (!this.IsValid())
			return ["is-invalid"];
		else
			return [""];
	}

	/**
	 * Sets the model state and rebuilds validation
	 */
	public Dirty() {
		//reload validation
		this.InitializeValidation();
	}
}