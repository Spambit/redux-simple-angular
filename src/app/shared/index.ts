import { NgModule } from '@angular/core';
import { MdbBootstrap } from './mdb-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    MdbBootstrap,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    AngularFontAwesomeModule,
    BsDropdownModule,
    NgbModule
  ],
  providers: []
})
export class SharedModules {

}
