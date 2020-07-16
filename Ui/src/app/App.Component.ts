import { Component, VERSION } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Version } from "@angular/compiler";

@Component({
	selector: "propellerhead-crm-app",
	templateUrl: "/app/AppComponent.html"
})
export class AppComponent {

	public version: string;

	public constructor(private titleService: Title, private router: Router) {
		this.version = VERSION.full;
	}

	// wrapper to the Angular title service.
	public setTitle(newTitle: string) {
		this.titleService.setTitle(newTitle);
	}

	private Portrait() {
		this.router.navigate(["/portrait/"]);
	}
}
