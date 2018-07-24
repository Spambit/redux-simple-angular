import { NavbarSearchModule } from './../navbar-search/navbar-search.module';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { NavbarComponent } from './navbar.component';
import { NavbarMenuModule } from '../navbar-menu/navbar-menu.module';
import { UserModule } from '../user/user.module';
import { SHARED_MODULES } from '../../../shared';

@NgModule({
    imports: [
      NavbarSearchModule,
      NavbarMenuModule,
      UserModule,
      ...SHARED_MODULES
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
