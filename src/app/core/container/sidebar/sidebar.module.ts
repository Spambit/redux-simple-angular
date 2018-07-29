import { BrandModule } from './../brand/brand.module';
import { NavbarSearchModule } from './../navbar-search/navbar-search.module';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { SidebarComponent } from './sidebar.component';

@NgModule({
    imports: [
      NavbarSearchModule,
      BrandModule
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
