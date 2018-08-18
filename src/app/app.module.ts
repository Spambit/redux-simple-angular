import { environment } from "~/environments/environment";
import * as fromStore from "./store";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModules } from "~/app/shared";
import { ROUTES } from "~/app/core/routers";
import { APP_CONTAINER_MODULES } from "@container/index";
import { AppComponent } from "~/app/app.component";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ...APP_CONTAINER_MODULES,
    RouterModule.forRoot(ROUTES, { useHash: true, enableTracing: true }),
    SharedModules,
    fromStore.StoreModuleWithProvider,
    fromStore.EffectModuleWithProvider,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
