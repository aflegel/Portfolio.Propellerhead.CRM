import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./AppModule";

platformBrowserDynamic().bootstrapModule(AppModule)
    .then((success: any) => console.log("App bootstrapped"))
    .catch((err: any) => console.error(err));
