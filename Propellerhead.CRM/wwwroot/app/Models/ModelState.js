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
class ModelValidation {
    constructor() { }
    /**
     * Function to be superceded that clears out validation and parent objects for serialization
     */
    PrepareSave() {
        this.validation = undefined;
    }
}
exports.ModelValidation = ModelValidation;
class ModelState extends ModelValidation {
    constructor() {
        super(...arguments);
        this.dirtyEmitter = new core_1.EventEmitter();
    }
    InitializeValidation() { }
    /**
     * Dummy function meant to check if the model is valid
     */
    IsValid() {
        return true;
    }
    /**
     * Returns a bootstrap css class if the model is invalid
     */
    IsValidCss() {
        if (!this.IsValid())
            return ["table-danger"];
        else
            return [""];
    }
    /**
     * Returns a bootstrap css class if the model is invalid
     */
    NgClassIsValid() {
        if (!this.IsValid())
            return ["is-invalid"];
        else
            return [""];
    }
    /**
     * Sets the model state and rebuilds validation
     */
    Dirty() {
        //reload validation
        this.InitializeValidation();
        this.dirtyEmitter.emit(true);
    }
}
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ModelState.prototype, "dirtyEmitter", void 0);
exports.ModelState = ModelState;
//# sourceMappingURL=ModelState.js.map