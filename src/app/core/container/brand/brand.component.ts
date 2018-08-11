import * as fromBrandActions from "./brand.actions";
import { Store } from "@ngrx/store";
import { Component, Output, EventEmitter } from "@angular/core";
import * as fromStore from "~/app/store";

@Component({
  moduleId: module.id,
  selector: "yt-brand",
  templateUrl: "brand.component.html",
  styleUrls: ["brand.component.scss"]
})
export class BrandComponent {
  private sidebarTogglerState = false;
  constructor(private store: Store<fromStore.AppState>) {}
  @Output()
  sidebarTogglerStateChange: EventEmitter<boolean> = new EventEmitter();
  onSidebarTogglerClick() {
    this.sidebarTogglerState = !this.sidebarTogglerState;
    this.sidebarTogglerStateChange.emit(this.sidebarTogglerState);
    if (this.sidebarTogglerState) {
      this.store.dispatch(new fromBrandActions.SidebarShouldOpenAction());
    } else {
      this.store.dispatch(new fromBrandActions.SidebarShouldCloseAction());
    }
  }
}
