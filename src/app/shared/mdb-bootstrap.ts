import {
  MDBBootstrapModule,
  ButtonsModule,
  CarouselModule,
  ChartsModule,
  CollapseModule,
  InputsModule,
  ModalModule,
  NavbarModule,
  PopoverModule,
  TooltipModule,
  WavesModule,
} from 'angular-bootstrap-md';
// Angular Imports
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [ MDBBootstrapModule.forRoot() ],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [
    ButtonsModule,
    CarouselModule,
    ChartsModule,
    CollapseModule,
    InputsModule,
    ModalModule,
    NavbarModule,
    PopoverModule,
    TooltipModule,
    WavesModule,
    MDBBootstrapModule
  ]
})
export class MdbBootstrap {}
