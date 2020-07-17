import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { HeaderUtility } from "./HeaderUtility";
import { Customer, CustomerIndex, CustomerEdit } from "../Models/Customer";

@Injectable()
export class CustomerService {

    private url: string = "customer";

    constructor(private http: HttpClient) { }

    GetCustomer(id: number): Observable<CustomerEdit> {
        return this.http.get<CustomerEdit>(this.url + "/Get/" + id, { headers: HeaderUtility.JsonHeaders() })
            .pipe(map(resp => new CustomerEdit(resp)));

    }

    GetCustomerIndex(query: CustomerIndex): Observable<CustomerIndex> {
        return this.http.post<CustomerIndex>(this.url + "/GetIndex", JSON.stringify(query), { headers: HeaderUtility.JsonHeaders() })
            .pipe(map(resp => new CustomerIndex(resp)));
    }

    UpdateCustomer(customer: Customer): Observable<CustomerEdit> {

        return this.http
            .put<CustomerEdit>(this.url + "/Put/" + customer.customerId, JSON.stringify(customer), { headers: HeaderUtility.JsonHeaders() })
            .pipe(map(resp => new CustomerEdit(resp)));
    }

    AddCustomer(customer: Customer): Observable<CustomerEdit> {
        return this.http
            .post<CustomerEdit>(this.url, JSON.stringify(customer), { headers: HeaderUtility.JsonHeaders() })
            .pipe(map(resp => new CustomerEdit(resp)));
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
