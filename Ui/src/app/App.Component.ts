import { Component, VERSION } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
	selector: "propellerhead-crm-app",
	templateUrl: "App.Component.html"
})
export class AppComponent {

	public version: string;

	public constructor(public titleService: Title, public router: Router) {
		this.version = VERSION.full;
	}

	// wrapper to the Angular title service.
	public setTitle(newTitle: string) {
		this.titleService.setTitle(newTitle);
	}
}
