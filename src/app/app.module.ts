import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SHARED_MODULES } from './shared/';

import { APP_CONTAINER_MODULES } from './core/container/';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ...APP_CONTAINER_MODULES,
    ...SHARED_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
