import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { HeaderService } from "./HeaderService";
import { Customer, CustomerIndex, CustomerEdit } from "../Models/Customer";

//npm install @angular/core@6.0.0-beta.8 @angular/common@6.0.0-beta.8 @angular/compiler@6.0.0-beta.8 @angular/forms@6.0.0-beta.8 @angular/http@6.0.0-beta.8 @angular/animations@6.0.0-beta.8 @angular/forms@6.0.0-beta.8 @angular/http@6.0.0-beta.8 @angular/platform-browser@6.0.0-beta.8 @angular/platform-browser-dynamic@6.0.0-beta.8 @angular/router@6.0.0-beta.8

@Injectable()
export class CustomerService {

	private url: string = "api/customer";

	constructor(private http: HttpClient) { }

	GetCustomer(id: number): Observable<CustomerEdit> {
		return this.http.get<CustomerEdit>(this.url + "/Get/" + id)
			.map(resp => new CustomerEdit(resp))
			.catch(this.handleError);
	}

	GetCustomerIndex(query: CustomerIndex): Observable<CustomerIndex> {
		return this.http.post<CustomerIndex>(this.url + "/GetIndex", JSON.stringify(query), { headers: HeaderService.JsonHeaders() })
			.map(resp => new CustomerIndex(resp))
			.catch(this.handleError);
	}

	UpdateCustomer(customer: Customer): Observable<CustomerEdit> {

		return this.http
			.put<CustomerEdit>(this.url + "/Put/" + customer.customerId, JSON.stringify(customer), { headers: HeaderService.JsonHeaders() })
			.map(resp => new CustomerEdit(resp))
			.catch(this.handleError);
	}

	AddCustomer(customer: Customer): Observable<CustomerEdit> {
		return this.http
			.post<CustomerEdit>(this.url, JSON.stringify(customer))
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
