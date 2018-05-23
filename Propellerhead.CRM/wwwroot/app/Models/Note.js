"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forms_1 = require("@angular/forms");
const ModelState_1 = require("./ModelState");
class Note extends ModelState_1.ModelState {
    constructor(note) {
        super();
        if (note != null) {
        }
        this.InitializeValidation();
    }
    /**
     * This creates a cached validation object for the front end
     */
    InitializeValidation() {
        this.validation = new forms_1.FormGroup({
            "content": new forms_1.FormControl(this.content, [
                forms_1.Validators.required,
            ])
        });
    }
    /**
     * checks all fields for validity, including children
     */
    IsValid() {
        var validity = this.validation.valid;
        return validity;
    }
    PrepareSave() {
        super.PrepareSave();
    }
}
exports.Note = Note;
//# sourceMappingURL=Note.js.map