"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forms_1 = require("@angular/forms");
const ModelState_1 = require("./ModelState");
const Note_1 = require("./Note");
class CustomerIndex {
}
exports.CustomerIndex = CustomerIndex;
class Customer extends ModelState_1.ModelState {
    constructor(customer) {
        super();
        this.notes = [];
        if (customer != null) {
            this.customerId = customer.customerId;
            this.name = customer.name;
            this.contactName = customer.contactName;
            this.contactEmail = customer.contactEmail;
            this.notes = customer.notes.map(note => new Note_1.Note(note));
        }
        this.InitializeValidation();
    }
    /**
     * This creates a cached validation object for the front end
     */
    InitializeValidation() {
        this.validation = new forms_1.FormGroup({
            "name": new forms_1.FormControl(this.name, [
                forms_1.Validators.required,
            ]),
            "contactName": new forms_1.FormControl(this.contactName, [
                forms_1.Validators.required,
            ])
        });
    }
    /**
     * checks all fields for validity, including children
     */
    IsValid() {
        var validity = this.validation.valid;
        for (var note of this.notes) {
            if (!note.IsValid())
                validity = false;
        }
        return validity;
    }
}
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map