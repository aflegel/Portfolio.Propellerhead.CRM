import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Status } from "../Models/Status";

@Injectable()
export class StatusService {
	private url = "http://localhost:57739/" + "status";

	constructor(private http: HttpClient) { }

	public Index(): Observable<Status[]> {
		return this.http.get<Status[]>(`${this.url}/`);
	}
}
