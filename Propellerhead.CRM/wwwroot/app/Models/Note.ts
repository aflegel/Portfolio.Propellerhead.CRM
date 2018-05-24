import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MinimumValue, MaximumValue, NgClassIsValid } from "../Framework/TextboxValidators";
import { ModelState, ModelValidationTools } from "./ModelState";
import { Customer } from "./Customer";

export class Note extends ModelState implements ModelValidationTools {
	constructor(note?: Note) {
		super();

		if (note != null) {
			this.noteId = note.noteId;
			this.content = note.content;
			this.created = note.created;
		}

		this.InitializeValidation();
	}

	/**
	 * This creates a cached validation object for the front end
	 */
	public InitializeValidation() {
		this.validation = new FormGroup({
			"content": new FormControl(this.content, [
				Validators.required,
			])
		});
	}

	/**
	 * checks all fields for validity, including children
	 */
	public IsValid(): boolean {

		var validity: boolean = this.validation.valid;

		return validity
	}

	public PrepareSave(): void {
		super.PrepareSave();
	}

	noteId: number;
	content: string;
	created: Date;
}