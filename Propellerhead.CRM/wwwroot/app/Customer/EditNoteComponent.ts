import { Component, OnInit, ComponentFactoryResolver, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { MinimumValue, NgClassIsValid } from "../Framework/TextboxValidators";

import { Customer } from "../Models/Customer";
import { Note } from "../Models/Note";
import { Status } from "../Models/Status";


@Component({
	selector: "[customer-edit-note]",
	template: `<div class="row row-compact"><div class="col m12"><input type="text" [(ngModel)]="note.content" name="content" [ngClass]="NgClassIsValid(content)" (change)="note.Dirty()"/></div></div>`
})


export class EditNoteComponent implements OnInit {
	/* Front end variables */
	@Input() note: Note;
	NgClassIsValid = NgClassIsValid;

	constructor() { }

	ngOnInit() {
	}


	/**
	 * Mapped service functions
	 */

	get content() {
		return this.note.validation.get("content");
	}
}