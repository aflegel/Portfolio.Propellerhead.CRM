import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CustomerService } from "../Services/Customer.Service";
import { CustomerIndex, Customer } from "../Models/Customer";

@Component({
	selector: "home-index",
	templateUrl: "Home.Component.html"
})

export class HomeComponent implements OnInit {

	customerList: Array<Customer>;
	query: string;
	sort: string;
	errorMessage: string;

	nameSort: string = "name-ascending";
	statusSort: string = "status-ascending";
	createdSort: string = "created-ascending";
	updatedSort: string = "updated-ascending";

	constructor(public router: Router, private customerService: CustomerService) {
		this.query = "";
		this.sort = "";
	}

	ngOnInit() {
		this.Get();
	}

	/**
	 * Fetches the list of customer records.  Transmits query and sort information.
	 * */
	private Get() {
		//Filtering and sorting is performed server side.  When pagination is introduced the client will only receive a subset of records.
		var indexData: CustomerIndex = new CustomerIndex({ query: this.query, customers: [], sort: this.sort } as CustomerIndex);

		this.customerService.GetCustomerIndex(indexData)
			.subscribe((data: CustomerIndex) => indexData = data,
				error => this.errorMessage = <any>error,
				() => this.Set(indexData));
	}

	/**
	 * Initializes the pages data.  Configures the sort parameters.
	 * @param data
	 */
	private Set(data: CustomerIndex) {
		this.customerList = data.customers;
		this.query = data.query;
		this.sort = data.sort;

		//this swaps the current sort for the opposing sort the next time it is clicked
		switch (data.sort) {
			case "name-ascending":
				this.nameSort = "name-descending";
				break;
			case "name-descending":
				this.nameSort = "name-ascending";
				break;
			case "status-ascending":
				this.statusSort = "status-descending";
				break;
			case "status-descending":
				this.statusSort = "status-ascending";
				break;
			case "created-ascending":
				this.createdSort = "created-descending";
				break;
			case "created-descending":
				this.createdSort = "created-ascending";
				break;
			case "updated-ascending":
				this.updatedSort = "updated-descending";
				break;
			case "updated-descending":
				this.updatedSort = "updated-ascending";
				break;
			default:
				break;
		}
	}

	/**
	 * Routes the app to the customer record with id.
	 * @param event
	 * @param customer
	 */
	public Load(event: Event, customer: Customer) {
		event.preventDefault();

		this.router.navigate(["/customer/", customer.customerId]);
	}

	/**
	 * Routes the app to a new customer page.
	 * @param event
	 * @param customer
	 */
	public Add(event: Event) {
		this.Load(event, { customerId: 0 } as Customer);
	}

	/**
	 * An extension of Get that halts anchor events.
	 * @param event
	 */
	public Search(event: Event) {
		event.preventDefault();

		this.Get();
	}

	/**
	 * Updates the sort parameter and calls Get
	 * @param event
	 * @param orderBy
	 */
	public Sort(event: Event, orderBy: string): void {
		this.sort = orderBy;

		this.Get();
	}
}
