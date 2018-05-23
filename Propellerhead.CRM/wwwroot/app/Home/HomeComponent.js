"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const CustomerService_1 = require("../Services/CustomerService");
let HomeComponent = class HomeComponent {
    constructor(router, customerService) {
        this.router = router;
        this.customerService = customerService;
    }
    ngOnInit() {
        this.Get();
    }
    Get() {
        var companyLists;
        this.customerService.GetCustomerIndex()
            .subscribe((data) => companyLists = data, error => this.errorMessage = error, () => this.Set(companyLists));
    }
    Set(data) {
        this.customerList = data.customers;
    }
    Load(customer) {
        this.router.navigate(["/customer/", customer.customerId]);
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: "my-index",
        templateUrl: "/app/Home/HomeComponent.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, CustomerService_1.CustomerService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=HomeComponent.js.map