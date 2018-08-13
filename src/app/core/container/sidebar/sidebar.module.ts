import { SidebarMenuModule } from "./../sidebar-menu/sidebar-menu.module";
import { NavbarSearchModule } from "@container/navbar-search/navbar-search.module";
// Angular Imports
import { NgModule } from "@angular/core";

// This Module's Components
import { SidebarComponent } from "./sidebar.component";
import { UserModule } from "@container/user/user.module";

@NgModule({
  imports: [NavbarSearchModule, UserModule, SidebarMenuModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule {}
