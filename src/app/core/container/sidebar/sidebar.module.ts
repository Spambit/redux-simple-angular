import { NavbarSearchModule } from '../navbar-search/navbar-search.module';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { SidebarComponent } from './sidebar.component';
import { UserModule } from '../user/user.module';

@NgModule({
    imports: [
      NavbarSearchModule,
      UserModule
    ],
    declarations: [
        SidebarComponent,
    ],
    exports: [
        SidebarComponent,
    ]
})
export class SidebarModule {

}
