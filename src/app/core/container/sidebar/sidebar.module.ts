import { NavbarSearchModule } from './../navbar-search/navbar-search.module';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { SidebarComponent } from './sidebar.component';

@NgModule({
    imports: [
      NavbarSearchModule
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
