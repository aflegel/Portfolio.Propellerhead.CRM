import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CustomerService } from "../Services/Customer.Service";

import { Customer } from "../Models/Customer";
import { Note } from "../Models/Note";
import { Status } from "../Models/Status";
import { StatusService } from "../Services/Status.Service";

@Component({
	selector: "customer-edit",
	templateUrl: "Edit.Component.html"
})

export class EditComponent implements OnInit {
	/* Front end variables */
	public customer: Customer;
	public statuses: Status[];
	public errorMessage: string;

	constructor(public route: ActivatedRoute, private companyService: CustomerService, private statusService: StatusService) {
		this.statuses = [];
	}

	public ngOnInit(): void {
		let customerId: number;
		const sub = this.route.params.subscribe(params => customerId = +params.id);

		this.GetStatus();
		this.Get(customerId);
	}

	/**
	 * Fetches the specified customer record
	 * @param id
	 */
	public Get(id: number): void {
		this.companyService.Get(id)
			.subscribe((data: Customer) => this.customer = data);
	}

	public GetStatus(): void {
		this.statusService.Index()
			.subscribe((data: Status[]) => this.statuses = data);
	}

	/**
	 * Pushes an update for the customer record to the api
	 * @param event
	 */
	public Update(event: Event): void {
		event.preventDefault();

		// if the customer record is null terminate.
		if (!this.customer) { return; }

		this.companyService.Update(this.customer)
			.subscribe((data: Customer) => this.customer = data);
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

		this.customer.notes.push({ noteId: 0, content: "", created: new Date(Date.now()) });
	}
}
