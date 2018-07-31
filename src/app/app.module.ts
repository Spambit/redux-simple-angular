import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModules } from './shared';
import { APP_CONTAINER_MODULES } from './core/container';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ...APP_CONTAINER_MODULES,
    SharedModules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
