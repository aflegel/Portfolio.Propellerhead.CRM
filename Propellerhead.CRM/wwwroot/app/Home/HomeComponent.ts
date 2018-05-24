import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { Router } from "@angular/router";
import { CustomerService } from "../Services/CustomerService";
import { CustomerIndex, Customer } from "../Models/Customer";

@Component({
	selector: "my-index",
	templateUrl: "/app/Home/HomeComponent.html"
})

export class HomeComponent implements OnInit {

	customerList: Array<Customer>;
	query: string;
	sort: string;
	errorMessage: string;

	constructor(public router: Router, private customerService: CustomerService) {
		this.query = "";
		this.sort = "";
	}

	ngOnInit() {
		this.Get();
	}

	private Get() {

		var indexData: CustomerIndex = new CustomerIndex({ query: this.query, customers: [], sort: this.sort } as CustomerIndex);

		this.customerService.GetCustomerIndex(indexData)
			.subscribe((data: CustomerIndex) => indexData = data,
				error => this.errorMessage = <any>error,
				() => this.Set(indexData));
	}

	private Set(data: CustomerIndex) {
		this.customerList = data.customers;
		this.query = data.query;
		this.sort = data.sort;
	}

	private Load(event: Event, customer: Customer) {
		event.preventDefault();

		this.router.navigate(["/customer/", customer.customerId]);
	}

	private Search(event: Event) {
		event.preventDefault();

		this.Get();
	}
}
