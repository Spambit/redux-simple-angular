import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const SHARED_MODULES = [
  MaterialModule,
  CommonModule,
  FormsModule,
  BrowserAnimationsModule,
  BrowserModule,
  BsDropdownModule.forRoot(),
  AngularFontAwesomeModule,
  NgbModule.forRoot()
];
