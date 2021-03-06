import { SharedModules } from "@shared/index";
import { BrandModule } from "../brand/brand.module";
import { NavbarSearchModule } from "../navbar-search/navbar-search.module";
// Angular Imports
import { NgModule } from "@angular/core";

// This Module's Components
import { NavbarComponent } from "@container/navbar/navbar.component";
import { UserModule } from "@container/user/user.module";

@NgModule({
  imports: [
    NavbarSearchModule,
    UserModule,
    BrandModule,
    SharedModules
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule {}
