import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CustomerService } from "../Services/Customer.Service";

import { Customer } from "../Models/Customer";
import { Status } from "../Models/Status";
import { StatusService } from "../Services/Status.Service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: "customer-edit",
	templateUrl: "Edit.Component.html"
})

export class EditComponent implements OnInit {
	/* Front end variables */
	public customer: Customer;
	public statuses: Status[];
	public errorMessage: string;

	public customerForm: FormGroup;

	constructor(public route: ActivatedRoute, private companyService: CustomerService, private statusService: StatusService) {
		this.statuses = [];
	}

	public ngOnInit(): void {
		let customerId: number;
		const sub = this.route.params.subscribe(params => customerId = +params.id);

		this.GetStatus();

		this.customerForm = new FormGroup({
			customerId: new FormControl("", []),
			name: new FormControl("", [Validators.required]),
			contactEmail: new FormControl("", [Validators.required, Validators.email]),
			contactName: new FormControl("", []),
			status: new FormControl("", [Validators.required])
		});

		if (customerId) {
			this.Get(customerId);
		}
		else {
			this.Set({
				customerId: -1,
				name: "",
				contactName: "",
				contactEmail: "",
				notes: [],
				statusId: 1,
			});
		}
	}

	public hasError = (controlName: string, errorName: string): boolean => {
		return this.customerForm.controls[controlName].hasError(errorName);
	}

	/**
	 * Fetches the specified customer record
	 * @param id
	 */
	public Get(id: number): void {
		this.companyService.Get(id)
			.subscribe((data: Customer) => this.Set(data));
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

		if (this.customerForm.invalid) { return; }

		if (!this.customer) { return; }

		this.customer.status = undefined;

		this.companyService.Update(this.customer)
			.subscribe((data: Customer) => this.customer = data);
	}

	/**
	 * Creates a new note and pushes it onto the customer note stack.
	 * */
	public AddNote(event: Event): void {
		event.preventDefault();

		if (this.customerForm.invalid) { return; }

		// if any notes are invalid prevent adding a new note
		for (const note of this.customer.notes) {
			/*if (!note.IsValid()) {
				return;
			}*/
		}

		this.customer.notes.push({ noteId: 0, content: "", created: new Date(Date.now()) });
	}

	private Set(customer: Customer): void {
		this.customer = customer;
		this.customerForm.patchValue({
			customerId: customer.customerId,
			name: customer.name,
			contactEmail: customer.contactEmail || "",
			contactName: customer.contactName,
			status: customer.statusId
		});
	}
}
