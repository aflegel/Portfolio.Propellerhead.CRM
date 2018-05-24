import "./rxjs-operators";

import { NgModule, enableProdMode } from "@angular/core";
import { BrowserModule, Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF, Location } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppRoutes } from "./Routes";
//import { MaterialDesignElements } from "./AppModule.Material";

import { AppComponent } from "./AppComponent";
import { EditComponent } from "./Customer/EditComponent";
import { HomeComponent } from "./Home/HomeComponent";
import { CustomerService } from "./Services/CustomerService";



// enableProdMode();

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		//MaterialDesignElements,
		AppRoutes
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
