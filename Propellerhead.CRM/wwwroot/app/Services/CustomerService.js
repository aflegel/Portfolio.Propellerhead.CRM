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
const http_1 = require("@angular/common/http");
const Observable_1 = require("rxjs/Observable");
const Customer_1 = require("../Models/Customer");
//npm install @angular/core@6.0.0-beta.8 @angular/common@6.0.0-beta.8 @angular/compiler@6.0.0-beta.8 @angular/forms@6.0.0-beta.8 @angular/http@6.0.0-beta.8 @angular/animations@6.0.0-beta.8 @angular/forms@6.0.0-beta.8 @angular/http@6.0.0-beta.8 @angular/platform-browser@6.0.0-beta.8 @angular/platform-browser-dynamic@6.0.0-beta.8 @angular/router@6.0.0-beta.8
let CustomerService = class CustomerService {
    constructor(http) {
        this.http = http;
        this.url = "api/customer";
    }
    GetCustomer(id) {
        return this.http.get(this.url + "/Get/" + id)
            .map(resp => new Customer_1.Customer(resp))
            .catch(this.handleError);
    }
    GetCustomerIndex() {
        return this.http.get(this.url + "/GetIndex")
            .map(resp => resp)
            .catch(this.handleError);
    }
    UpdateCustomer(customer) {
        return this.http
            .put(this.url + "/Put/" + customer.customerId, JSON.stringify(customer))
            .map(resp => new Customer_1.Customer(resp))
            .catch(this.handleError);
    }
    AddCustomer(customer) {
        return this.http
            .post(this.url, JSON.stringify(customer))
            .map(resp => new Customer_1.Customer(resp))
            .catch(this.handleError);
    }
    // from https://angular.io/docs/ts/latest/guide/server-communication.html
    handleError(error) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg;
        if (error instanceof Response) {
            const body = error.json() || "";
            //const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ""} `;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    }
};
CustomerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=CustomerService.js.map