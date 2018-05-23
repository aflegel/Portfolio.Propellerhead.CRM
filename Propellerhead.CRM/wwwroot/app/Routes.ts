import { Routes, RouterModule } from "@angular/router";

import { EditComponent } from "./Customer/EditComponent";
import { HomeComponent } from "./Home/HomeComponent";

const appRoutes: Routes = [
	{ path: "", pathMatch: "full" , component: HomeComponent, data: { title: "Home" } },
	{ path: "customer/:id", component: EditComponent, data: { title: "Edit Customer" } }
];

export const HomeRouting = RouterModule.forRoot(appRoutes);