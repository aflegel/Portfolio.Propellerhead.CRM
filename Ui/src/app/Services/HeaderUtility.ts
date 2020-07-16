import { HttpHeaders } from "@angular/common/http";

export class HeaderUtility {

	// for requesting unsecured data using json
	public static JsonHeaders(): HttpHeaders {
		return new HttpHeaders()
			.append("Content-Type", "application/json")
			.append("Accept", "application/json");
	}

	// for requesting unsecured data using form post
	public static ContentHeaders(): HttpHeaders {
		return new HttpHeaders()
			.append("Content-Type", "application/x-www-form-urlencoded")
			.append("Accept", "application/json");
	}
}