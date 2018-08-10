import { BrandModule } from '~/app/core/container/brand/brand.module';
import { NavbarSearchModule } from '~/app/core/container/navbar-search/navbar-search.module';
import { NavbarModule } from '~/app/core/container/navbar/navbar.module';
import { NavbarMenuModule } from '~/app/core/container/navbar-menu/navbar-menu.module';
import { UserModule } from '~/app/core/container/user/user.module';
import { SidebarModule } from '~/app/core/container/sidebar/sidebar.module';

export const APP_CONTAINER_MODULES = [
  UserModule,
  SidebarModule,
  NavbarMenuModule,
  NavbarModule,
  NavbarSearchModule,
  BrandModule,
  SidebarModule,
];

