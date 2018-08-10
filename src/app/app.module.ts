import { StoreModuleWithProvider } from "./store";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModules } from "~/app/shared";
import { ROUTES } from "~/app/core/routers";
import { APP_CONTAINER_MODULES } from "~/app/core/container";
import { AppComponent } from "~/app/app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ...APP_CONTAINER_MODULES,
    RouterModule.forRoot(ROUTES, { useHash: true, enableTracing: true }),
    SharedModules,
    StoreModuleWithProvider
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
