import "./Operators";

import { NgModule, enableProdMode } from "@angular/core";
import { BrowserModule, Title } from "@angular/platform-browser";
import { APP_BASE_HREF, Location } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppRoutes } from "./Routes";

import { AppComponent } from "./App.Component";
import { EditComponent } from "./Customer/Edit.Component";
import { EditNoteComponent } from "./Customer/EditNote.Component";
import { HomeComponent } from "./Home/Home.Component";
import { PortraitComponent } from "./Home/Portrait.Component";
import { CustomerService } from "./Services/Customer.Service";

// enableProdMode();

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRoutes
	],
	declarations: [
		AppComponent,
		HomeComponent,
		PortraitComponent,
		EditNoteComponent,
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
