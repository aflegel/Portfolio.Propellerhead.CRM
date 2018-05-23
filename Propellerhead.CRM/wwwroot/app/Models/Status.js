"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ModelState_1 = require("./ModelState");
class Status extends ModelState_1.ModelState {
    constructor(status) {
        super();
        if (status != null) {
        }
    }
    /**
     * checks all fields for validity, including children
     */
    IsValid() {
        return true;
    }
}
exports.Status = Status;
//# sourceMappingURL=Status.js.map