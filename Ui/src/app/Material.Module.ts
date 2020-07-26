import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";

const materialModules = [MatToolbarModule, MatInputModule, MatIconModule, MatCardModule, MatSelectModule, MatListModule, MatButtonModule];
@NgModule({
	imports: [
		BrowserAnimationsModule,
		FlexLayoutModule,
		materialModules
	],
	exports: [
		BrowserAnimationsModule,
		FlexLayoutModule,
		materialModules
	],
})
export class MaterialModule { }
