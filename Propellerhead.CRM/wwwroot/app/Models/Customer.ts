﻿import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MinimumValue, MaximumValue, NgClassIsValid } from "../Framework/TextboxValidators";
import { ModelState, ModelValidationTools } from "./ModelState";
import { Note } from "./Note";
import { Status } from "./Status";

export class CustomerIndex {
	constructor(customerIndex: CustomerIndex) {
		this.customers = [];

		this.customers = customerIndex.customers.map(customer => new Customer(customer));
	}

	customers: Customer[];
}

export class Customer extends ModelState implements ModelValidationTools {
	constructor(customer?: Customer) {
		super();
		this.notes = [];

		if (customer != null) {
			this.customerId = customer.customerId;
			this.name = customer.name;
			this.contactName = customer.contactName;
			this.contactEmail = customer.contactEmail;
			this.created = customer.created;
			this.updated = customer.updated;
			this.statusId = customer.statusId;

			this.status = new Status(customer.status);
			this.notes = customer.notes.map(note => new Note(note));
		}

		this.InitializeValidation();
	}

	/**
	 * This creates a cached validation object for the front end
	 */
	public InitializeValidation() {
		this.validation = new FormGroup({
			"name": new FormControl(this.name, [
				Validators.required,
			]),
			"contactName": new FormControl(this.contactName, [
				Validators.required,
			])
		});
	}

	/**
	 * checks all fields for validity, including children
	 */
	public IsValid(): boolean {

		var validity: boolean = this.validation.valid;

		for (var note of this.notes) {
			if (!note.IsValid())
				validity = false;
		}

		return validity
	}

	public PrepareSave(): void {
		super.PrepareSave();

		this.created = "2018-05-05";
		this.updated = "2018-05-05";

		this.notes.forEach(item => item.PrepareSave());
		this.status.PrepareSave();
	}

	customerId: number;
	name: string;
	statusId: number;

	contactName: string;
	contactEmail: string;

	created: string;
	updated: string;

	notes: Note[];
	status: Status;
}
