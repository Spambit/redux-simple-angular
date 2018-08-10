import { CORE_COMPONENTS } from "~/app/core/components";
import { NgModule } from "@angular/core";
import { MdbBootstrap } from "~/app/shared/mdb-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "~/app/shared/material";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CORE_SERVICES } from "~/app/core/services";

@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  declarations: [...CORE_COMPONENTS],
  exports: [
    MdbBootstrap,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    AngularFontAwesomeModule,
    BsDropdownModule,
    NgbModule,
    ...CORE_COMPONENTS
  ],
  providers: [...CORE_SERVICES]
})
export class SharedModules {}
