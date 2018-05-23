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
const Customer_1 = require("../Models/Customer");
let EditComponent = class EditComponent {
    constructor(route, companyService) {
        this.route = route;
        this.companyService = companyService;
    }
    ngOnInit() {
        var customerId;
        var sub = this.route.params.subscribe(params => {
            customerId = +params["id"]; // (+) converts string "id" to a number
            // In a real app: dispatch action to load the details here.
        });
        this.Get(customerId);
    }
    /**
     * Mapped service functions
     */
    Get(id) {
        var subscribedData;
        this.companyService.GetCustomer(id).subscribe((data) => subscribedData = data, error => this.errorMessage = error, () => this.SyncData(subscribedData));
    }
    SyncData(data) {
        this.customer = data;
    }
    Update(event) {
        event.preventDefault();
        if (!this.customer) {
            return;
        }
        var test = new Customer_1.Customer(this.customer);
        test.PrepareSave(); //description = "Is this thing separate?";
        var subscribedData;
        this.companyService.UpdateCustomer(test).subscribe((data) => subscribedData = data, error => this.errorMessage = error, () => this.SyncData(subscribedData));
    }
    Load(event) {
        event.preventDefault();
    }
};
EditComponent = __decorate([
    core_1.Component({
        selector: "customer-edit",
        templateUrl: "/app/Customer/EditComponent.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, CustomerService_1.CustomerService])
], EditComponent);
exports.EditComponent = EditComponent;
//# sourceMappingURL=EditComponent.js.map