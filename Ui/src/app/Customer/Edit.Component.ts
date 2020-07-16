import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgClassIsValid } from "../Framework/TextboxValidators";

import { CustomerService } from "../Services/Customer.Service";

import { Customer, CustomerEdit } from "../Models/Customer";
import { Note } from "../Models/Note";
import { Status } from "../Models/Status";


@Component({
	selector: "customer-edit",
	templateUrl: "/app/Customer/EditComponent.html"
})

export class EditComponent implements OnInit {
	/* Front end variables */
	customer: Customer;
	statuses: Status[];
	errorMessage: string;
	NgClassIsValid = NgClassIsValid;

	constructor(public route: ActivatedRoute, private companyService: CustomerService) {
		this.statuses = [];
	}

	ngOnInit() {
		var customerId: number;
		var sub = this.route.params.subscribe(params => {
			customerId = +params["id"]; // (+) converts string "id" to a number
		});

		this.Get(customerId);
	}


	/**
	 * Fetches the specified customer record
	 * @param id
	 */
	private Get(id: number) {
		var subscribedData: any;

		this.companyService.GetCustomer(id)
			.subscribe((data: CustomerEdit) => subscribedData = data, //makes the api call and sets the data
				error => this.errorMessage = <any>error,                  //what to do with an error
				() => this.Set(subscribedData));                          //what to do with the call response
	}

	/**
	 * Sets the customer data and the available statuses
	 * @param data
	 */
	private Set(data: CustomerEdit) {
		if (!data.customer) {
			this.customer = new Customer();
		} else {
			this.customer = data.customer;
		}
		this.statuses = data.statuses;
	}

	/**
	 * Pushes an update for the customer record to the api
	 * @param event
	 */
	private Update(event: Event): void {
		event.preventDefault();

		//if the customer record is null terminate.
		if (!this.customer) { return; }

		//if the form has validation issues terminate
		if (!this.customer.IsValid()) { return; }

		//prepare all objects for transmission
		this.customer.PrepareSave();

		var subscribedData: any;

		this.companyService.UpdateCustomer(this.customer)
			.subscribe((data: CustomerEdit) => subscribedData = data, //makes the api call and sets the data
				error => this.errorMessage = <any>error,                  //what to do with an error
				() => this.Set(subscribedData));                          //what to do with the call response
	}

	/**
	 * Creates a new note and pushes it onto the customer note stack.
	 * */
	private AddNote(event: Event): void {
		event.preventDefault();

		//if any notes are invalid prevent adding a new note
		for (var note of this.customer.notes) {
			if (!note.IsValid())
				return;
		}

		this.customer.notes.push(new Note());
	}

	/**
	 * Validation extensions for the html file
	 * */
	get name() {
		return this.customer.validation.get("name");
	}

	get contactName() {
		return this.customer.validation.get("contactName");
	}

	get contactEmail() {
		return this.customer.validation.get("contactEmail");
	}
}
