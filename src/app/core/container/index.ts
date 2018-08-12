import { SidebarMenuModule } from "./sidebar-menu/sidebar-menu.module";
import { BrandModule } from "./brand/brand.module";
import { NavbarSearchModule } from "./navbar-search/navbar-search.module";
import { NavbarModule } from "./navbar/navbar.module";
import { UserModule } from "./user/user.module";
import { SidebarModule } from "./sidebar/sidebar.module";

export const APP_CONTAINER_MODULES = [
  UserModule,
  SidebarModule,
  SidebarMenuModule,
  NavbarModule,
  NavbarSearchModule,
  BrandModule,
  SidebarModule
];
