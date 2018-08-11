import { SharedModules } from "~/app/shared";
// Angular Imports
import { NgModule } from "@angular/core";

// This Module's Components
import { BrandComponent } from "./brand.component";

@NgModule({
  imports: [SharedModules],
  declarations: [BrandComponent],
  exports: [BrandComponent]
})
export class BrandModule {}
