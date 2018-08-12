import { SidebarMenuModule } from "./../sidebar-menu/sidebar-menu.module";
import { NavbarSearchModule } from "~/app/core/container/navbar-search/navbar-search.module";
// Angular Imports
import { NgModule } from "@angular/core";

// This Module's Components
import { SidebarComponent } from "~/app/core/container/sidebar/sidebar.component";
import { UserModule } from "~/app/core/container/user/user.module";

@NgModule({
  imports: [NavbarSearchModule, UserModule, SidebarMenuModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule {}
