"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const AppModule_1 = require("./AppModule");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule_1.AppModule)
    .then((success) => console.log("App bootstrapped"))
    .catch((err) => console.error(err));
//# sourceMappingURL=main.js.map