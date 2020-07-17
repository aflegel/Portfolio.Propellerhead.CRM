import { Note } from "./Note";
import { Status } from "./Status";

export interface CustomerIndex {
	customers: Customer[];
	query: string;
	sort: string;
}

export interface CustomerEdit {
	customer: Customer;
	statuses: Status[];
}

export interface Customer {
	customerId: number;
	name: string; // required
	statusId: number;

	contactName: string; // required
	contactEmail: string; // required

	created: string;
	updated: string;

	notes: Note[];
	status: Status;
}
