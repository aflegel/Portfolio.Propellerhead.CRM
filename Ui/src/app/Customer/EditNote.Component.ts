import { Component, Input } from "@angular/core";
import { NgClassIsValid } from "../Framework/TextboxValidators";

import { Note } from "../Models/Note";

@Component({
	selector: "[customer-edit-note]",
	template: `
<div class="row row-compact"><div class="col s12">
    <input type="text" class="validate" [(ngModel)]="note.content" name="content" required />
    <span class="helper-text" *ngIf="note">Required</span>
</div>
`
})
//          <textarea id="textarea1" class="materialize-textarea"></textarea>

export class EditNoteComponent {
	/* Front end variables */
	@Input() note: Note;
}
