import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { MinimumValue, NgClassIsValid } from "../Framework/TextboxValidators";

import { CustomerService } from "../Services/CustomerService";

import { Customer } from "../Models/Customer";
import { Note } from "../Models/Note";
import { Status } from "../Models/Status";


@Component({
	selector: "customer-edit",
	templateUrl: "/app/Customer/EditComponent.html"
})

export class EditComponent implements OnInit {
	/* Front end variables */
	customer: Customer;
	errorMessage: string;

	constructor(public route: ActivatedRoute, private companyService: CustomerService) { }

	ngOnInit() {
		var customerId: number;
		var sub = this.route.params.subscribe(params => {
			customerId = +params["id"]; // (+) converts string "id" to a number

			// In a real app: dispatch action to load the details here.
		});

		this.Get(customerId);
	}


	/**
	 * Mapped service functions
	 */
	Get(id: number) {
		var subscribedData: any;
		this.companyService.GetCustomer(id).subscribe(
			(data: Customer) => subscribedData = data,
			error => this.errorMessage = <any>error,
			() => this.SyncData(subscribedData));
	}

	private SyncData(data: Customer) {
		this.customer = data;
	}

	Update(event: Event): void {
		event.preventDefault();

		if (!this.customer) { return; }

		var test = new Customer(this.customer);

		test.PrepareSave();//description = "Is this thing separate?";

		var subscribedData: any;

		this.companyService.UpdateCustomer(test).subscribe(
			(data: Customer) => subscribedData = data,
			error => this.errorMessage = <any>error,
			() => this.SyncData(subscribedData));
	}

	Load(event: Event): void {
		event.preventDefault();
	}
}