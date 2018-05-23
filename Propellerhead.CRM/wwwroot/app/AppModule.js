"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./rxjs-operators");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/common/http");
const AppComponent_1 = require("./AppComponent");
const EditComponent_1 = require("./Customer/EditComponent");
const HomeComponent_1 = require("./Home/HomeComponent");
const CustomerService_1 = require("./Services/CustomerService");
const Routes_1 = require("./Routes");
// enableProdMode();
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpClientModule,
            Routes_1.HomeRouting
        ],
        declarations: [
            AppComponent_1.AppComponent,
            HomeComponent_1.HomeComponent,
            EditComponent_1.EditComponent,
        ],
        entryComponents: [
            EditComponent_1.EditComponent
        ],
        providers: [
            CustomerService_1.CustomerService,
            platform_browser_1.Title,
            { provide: common_1.APP_BASE_HREF, useValue: "/" }
        ],
        bootstrap: [AppComponent_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=AppModule.js.map