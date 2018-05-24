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
	errorMessage: string;

	constructor(public router: Router, private customerService: CustomerService) { }

	ngOnInit() {
		this.Get();
	}

	private	Get() {
		var companyLists: CustomerIndex;

		this.customerService.GetCustomerIndex("")
			.subscribe((data: CustomerIndex) => companyLists = data,
				error => this.errorMessage = <any>error,
				() => this.Set(companyLists));
	}

	private Set(data: CustomerIndex) {
		this.customerList = data.customers;
	}

	Load(customer: Customer) {
		this.router.navigate(["/customer/", customer.customerId]);
	}
}
