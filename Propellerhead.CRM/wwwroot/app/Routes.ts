import { Routes, RouterModule } from "@angular/router";

import { EditComponent } from "./Customer/EditComponent";
import { HomeComponent } from "./Home/HomeComponent";
import { PortraitComponent } from "./Home/PortraitComponent";

const appRoutes: Routes = [
	{ path: "", pathMatch: "full" , component: HomeComponent, data: { title: "Home" } },
	{ path: "customer/", component: EditComponent, data: { title: "Add Customer" } },
	{ path: "customer/:id", component: EditComponent, data: { title: "Edit Customer" } },
	{ path: "portrait", component: PortraitComponent, data: { title: "Portrait" } }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);