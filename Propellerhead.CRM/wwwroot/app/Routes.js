"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const EditComponent_1 = require("./Customer/EditComponent");
const HomeComponent_1 = require("./Home/HomeComponent");
const appRoutes = [
    { path: "", pathMatch: "full", component: HomeComponent_1.HomeComponent, data: { title: "Home" } },
    { path: "customer/:id", component: EditComponent_1.EditComponent, data: { title: "Edit Customer" } }
];
exports.HomeRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=Routes.js.map