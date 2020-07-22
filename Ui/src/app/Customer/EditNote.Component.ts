import { Component, Input } from "@angular/core";
import { Note } from "../Models/Note";

@Component({
	selector: "[customer-edit-note]",
	template: `
<div class="row row-compact">
	<div class="col s12">
    	<input type="text" class="validate" [(ngModel)]="note.content" name="content" required  #content="ngModel"  />
		<span class="helper-text" *ngIf="content.invalid && content.errors.required">Required</span>
	</div>
</div>
`
})
export class EditNoteComponent {
	/* Front end variables */
	@Input() note: Note;
}
