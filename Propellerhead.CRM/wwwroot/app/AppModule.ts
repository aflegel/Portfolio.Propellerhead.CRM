import "./rxjs-operators";

import { NgModule, enableProdMode } from "@angular/core";
import { BrowserModule, Title } from "@angular/platform-browser";
import { APP_BASE_HREF, Location } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./AppComponent";
import { EditComponent } from "./Customer/EditComponent";
import { HomeComponent } from "./Home/HomeComponent";
import { CustomerService } from "./Services/CustomerService";
import { HomeRouting } from "./Routes";

// enableProdMode();

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		HomeRouting
	],
	declarations: [
		AppComponent,
		HomeComponent,
		EditComponent,
	],
	entryComponents: [
		EditComponent],
	providers: [
		CustomerService,
		Title,
		{ provide: APP_BASE_HREF, useValue: "/" }],
	bootstrap: [AppComponent]

})
export class AppModule { }
