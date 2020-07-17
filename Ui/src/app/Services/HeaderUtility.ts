import { HttpHeaders } from "@angular/common/http";

// for requesting unsecured data using json
export const jsonHeaders = (): HttpHeaders => new HttpHeaders()
	.append("Content-Type", "application/json")
	.append("Accept", "application/json");

// for requesting unsecured data using form post
export const contentHeaders = (): HttpHeaders => new HttpHeaders()
	.append("Content-Type", "application/x-www-form-urlencoded")
	.append("Accept", "application/json");
