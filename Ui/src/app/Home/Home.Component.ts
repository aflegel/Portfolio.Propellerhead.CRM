import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CustomerService } from "../Services/Customer.Service";
import { CustomerSearch, Customer, CustomerIndex } from "../Models/Customer";
import { FormControl } from "@angular/forms";

@Component({
	selector: "home-index",
	templateUrl: "Home.Component.html"
})

export class HomeComponent implements OnInit {

	public customerList: Array<Customer>;
	public sort: string;

	public search: FormControl;

	public errorMessage: string;

	public nameSort = "name-ascending";
	public statusSort = "status-ascending";
	public createdSort = "created-ascending";
	public updatedSort = "updated-ascending";

	constructor(public router: Router, private customerService: CustomerService) {
		this.search = new FormControl("");
		this.sort = "";
	}

	public ngOnInit(): void {
		this.Get();
	}

	/**
	 * An extension of Get that halts anchor events.
	 * @param event
	 */
	public Search(event: Event): void {
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

	/**
	 * Fetches the list of customer records.  Transmits query and sort information.
	 * */
	private Get(): void {
		// Filtering and sorting is performed server side.  When pagination is introduced the client will only receive a subset of records.
		const indexData: CustomerSearch = {
			query: this.search.value,
			sort: this.sort
		};

		this.customerService.Index(indexData)
			.subscribe((data: Customer[]) => this.Set({ customers: data, ...indexData })),
			error => this.errorMessage = <any>error;
	}

	/**
	 * Initializes the pages data.  Configures the sort parameters.
	 * @param data
	 */
	private Set(data: CustomerSearch & CustomerIndex): void {
		this.customerList = data.customers;
		this.search.patchValue(data.query);
		this.sort = data.sort;

		// this swaps the current sort for the opposing sort the next time it is clicked
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
}
