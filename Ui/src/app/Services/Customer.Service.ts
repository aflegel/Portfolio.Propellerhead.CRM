import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { jsonHeaders } from "./HeaderUtility";
import { Customer, CustomerIndex, CustomerEdit } from "../Models/Customer";

@Injectable()
export class CustomerService {
	private url = "customer";

	constructor(private http: HttpClient) { }

	public GetCustomer(id: number): Observable<CustomerEdit> {
		return this.http.get<CustomerEdit>(`${this.url}/Get/${id}`, { headers: jsonHeaders() });
	}

	public GetCustomerIndex(query: CustomerIndex): Observable<CustomerIndex> {
		return this.http.post<CustomerIndex>(`${this.url}/GetIndex`, JSON.stringify(query), { headers: jsonHeaders() });
	}

	public UpdateCustomer(customer: Customer): Observable<CustomerEdit> {
		return this.http
			.put<CustomerEdit>(`${this.url}/Put/${customer.customerId}`, JSON.stringify(customer), { headers: jsonHeaders() });
	}

	public AddCustomer(customer: Customer): Observable<CustomerEdit> {
		return this.http
			.post<CustomerEdit>(this.url, JSON.stringify(customer), { headers: jsonHeaders() });
	}
}
