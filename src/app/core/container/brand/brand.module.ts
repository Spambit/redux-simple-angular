import { SHARED_MODULES } from './../../../shared/index';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { BrandComponent } from './brand.component';

@NgModule({
    imports: [
      SHARED_MODULES
    ],
    declarations: [
        BrandComponent,
    ],
    exports: [
        BrandComponent,
    ]
})
export class BrandModule {
}
