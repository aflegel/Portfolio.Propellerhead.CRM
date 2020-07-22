import { Routes, RouterModule } from "@angular/router";

import { EditComponent } from "./Customer/Edit.Component";
import { HomeComponent } from "./Home/Home.Component";
import { PortraitComponent } from "./Home/Portrait.Component";

const appRoutes: Routes = [
	{ path: "", pathMatch: "full" , component: HomeComponent, data: { title: "Home" } },
	//{ path: "customer/", component: EditComponent, data: { title: "Add Customer" } },
	{ path: "customer/:id", component: EditComponent, data: { title: "Edit Customer" } },
	{ path: "portrait", component: PortraitComponent, data: { title: "Portrait" } }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
