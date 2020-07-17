import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgClassIsValid } from "../Framework/TextboxValidators";

import { CustomerService } from "../Services/Customer.Service";

import { Customer, CustomerEdit } from "../Models/Customer";
import { Note } from "../Models/Note";
import { Status } from "../Models/Status";

@Component({
	selector: "customer-edit",
	templateUrl: "Edit.Component.html"
})

export class EditComponent implements OnInit {
	/* Front end variables */
	public customer: Customer;
	public statuses: Status[];
	public errorMessage: string;
	public NgClassIsValid = NgClassIsValid;

	constructor(public route: ActivatedRoute, private companyService: CustomerService) {
		this.statuses = [];
	}

	public ngOnInit(): void {
		let customerId: number;
		const sub = this.route.params.subscribe(params => {
			customerId = +params.id; // (+) converts string "id" to a number
		});

		this.Get(customerId);
	}

	/**
	 * Fetches the specified customer record
	 * @param id
	 */
	public Get(id: number): void {
		let subscribedData: CustomerEdit;

		this.companyService.GetCustomer(id)
			.subscribe((data: CustomerEdit) => subscribedData = data, // makes the api call and sets the data
				error => this.errorMessage = <any>error,                  // what to do with an error
				() => this.Set(subscribedData));                          // what to do with the call response
	}

	/**
	 * Sets the customer data and the available statuses
	 * @param data
	 */
	public Set(data: CustomerEdit): void {
		if (data.customer) {
			this.customer = data.customer;
		}
		this.statuses = data.statuses;
	}

	/**
	 * Pushes an update for the customer record to the api
	 * @param event
	 */
	public Update(event: Event): void {
		event.preventDefault();

		// if the customer record is null terminate.
		if (!this.customer) { return; }

		let subscribedData: any;

		this.companyService.UpdateCustomer(this.customer)
			.subscribe((data: CustomerEdit) => subscribedData = data, // makes the api call and sets the data
				error => this.errorMessage = <any>error,                  // what to do with an error
				() => this.Set(subscribedData));                          // what to do with the call response
	}

	/**
	 * Creates a new note and pushes it onto the customer note stack.
	 * */
	public AddNote(event: Event): void {
		event.preventDefault();

		// if any notes are invalid prevent adding a new note
		for (const note of this.customer.notes) {
			/*if (!note.IsValid()) {
				return;
			}*/
		}

		//this.customer.notes.push({ noteId: "", content: "", created: "" });
	}
}
