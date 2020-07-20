import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { jsonHeaders } from "./HeaderUtility";
import { Customer, CustomerSearch } from "../Models/Customer";

@Injectable()
export class CustomerService {
	private url = "http://localhost:57739/" + "customer";

	constructor(private http: HttpClient) { }

	public Get(id: number): Observable<Customer> {
		return this.http.get<Customer>(`${this.url}/${id}`, { headers: jsonHeaders() });
	}

	public Index(query: CustomerSearch): Observable<Customer[]> {
		return this.http.post<Customer[]>(this.url + "/", JSON.stringify(query), { headers: jsonHeaders() });
	}

	public Update(customer: Customer): Observable<Customer> {
		return this.http
			.put<Customer>(`${this.url}/${customer.customerId}`, JSON.stringify(customer), { headers: jsonHeaders() });
	}

	public Add(customer: Customer): Observable<Customer> {
		return this.http
			.post<Customer>(this.url, JSON.stringify(customer), { headers: jsonHeaders() });
	}
}
