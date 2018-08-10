import { SharedModules } from '~/app/shared';
import { SidebarModule } from '~/app/core/container/sidebar/sidebar.module';
import { BrandModule } from '~/app/core/container/brand/brand.module';
import { NavbarSearchModule } from '~/app/core/container/navbar-search/navbar-search.module';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { NavbarComponent } from '~/app/core/container/navbar/navbar.component';
import { NavbarMenuModule } from '~/app/core/container/navbar-menu/navbar-menu.module';
import { UserModule } from '~/app/core/container/user/user.module';

@NgModule({
    imports: [
      NavbarSearchModule,
      NavbarMenuModule,
      UserModule,
      BrandModule,
      SidebarModule,
      SharedModules
    ],
    declarations: [
        NavbarComponent,
    ],
    exports: [
        NavbarComponent,
    ]
})
export class NavbarModule {

}
