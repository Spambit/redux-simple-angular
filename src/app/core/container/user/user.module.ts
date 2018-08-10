// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { UserComponent } from '~/app/core/container/user/user.component';

@NgModule({
    imports: [

    ],
    declarations: [
        UserComponent,
    ],
    exports: [
        UserComponent,
    ]
})
export class UserModule {

}
