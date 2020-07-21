import { Note } from "./Note";

export interface CustomerSearch {
	query: string;
	sort: string;
}

export interface CustomerIndex {
	customers: Customer[];
}

export interface Customer {
	customerId: number;
	name: string; // required
	statusId: number;

	contactName: string; // required
	contactEmail: string; // required

	created: Date;
	updated: Date;

	notes: Note[];

	status?: { label: string };
}
