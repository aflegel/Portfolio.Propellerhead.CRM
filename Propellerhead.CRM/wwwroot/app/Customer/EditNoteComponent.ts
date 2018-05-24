﻿import { Component, Input } from "@angular/core";
import { NgClassIsValid } from "../Framework/TextboxValidators";

import { Customer } from "../Models/Customer";
import { Note } from "../Models/Note";
import { Status } from "../Models/Status";


@Component({
	selector: "[customer-edit-note]",
	template: `<div class="row row-compact"><div class="col s12"><input type="text" [(ngModel)]="note.content" name="content" [ngClass]="NgClassIsValid(content)" (change)="note.Dirty()"/></div></div>`
})
//          <textarea id="textarea1" class="materialize-textarea"></textarea>

export class EditNoteComponent {
	/* Front end variables */
	@Input() note: Note;
	NgClassIsValid = NgClassIsValid;

	/**
	 * Validation extensions for the html file
	 */
	get content() {
		return this.note.validation.get("content");
	}
}