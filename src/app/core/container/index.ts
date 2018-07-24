import { NavbarSearchModule } from './navbar-search/navbar-search.module';
import { NavbarModule } from './navbar/navbar.module';
import { NavbarMenuModule } from './navbar-menu/navbar-menu.module';
import { UserModule } from './user/user.module';
import { SidebarModule } from './sidebar/sidebar.module';

export const APP_CONTAINER_MODULES = [
  UserModule,
  SidebarModule,
  NavbarMenuModule,
  NavbarModule,
  NavbarSearchModule
];

