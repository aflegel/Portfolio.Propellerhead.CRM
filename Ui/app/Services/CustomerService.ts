import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { HeaderUtility } from "./HeaderUtility";
import { Customer, CustomerIndex, CustomerEdit } from "../Models/Customer";

@Injectable()
export class CustomerService {

	private url: string = "api/customer";

	constructor(private http: HttpClient) { }

	GetCustomer(id: number): Observable<CustomerEdit> {
		return this.http.get<CustomerEdit>(this.url + "/Get/" + id, { headers: HeaderUtility.JsonHeaders() })
			.map(resp => new CustomerEdit(resp))
			.catch(this.handleError);
	}

	GetCustomerIndex(query: CustomerIndex): Observable<CustomerIndex> {
		return this.http.post<CustomerIndex>(this.url + "/GetIndex", JSON.stringify(query), { headers: HeaderUtility.JsonHeaders() })
			.map(resp => new CustomerIndex(resp))
			.catch(this.handleError);
	}

	UpdateCustomer(customer: Customer): Observable<CustomerEdit> {

		return this.http
			.put<CustomerEdit>(this.url + "/Put/" + customer.customerId, JSON.stringify(customer), { headers: HeaderUtility.JsonHeaders() })
			.map(resp => new CustomerEdit(resp))
			.catch(this.handleError);
	}

	AddCustomer(customer: Customer): Observable<CustomerEdit> {
		return this.http
			.post<CustomerEdit>(this.url, JSON.stringify(customer), { headers: HeaderUtility.JsonHeaders() })
			.map(resp => new CustomerEdit(resp))
			.catch(this.handleError);
	}

	// from https://angular.io/docs/ts/latest/guide/server-communication.html
	private handleError(error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || "";
			//const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ""} `;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}
