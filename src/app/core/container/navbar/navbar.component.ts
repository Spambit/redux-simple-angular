import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "yt-navbar",
  templateUrl: "navbar.component.html",
  styleUrls: ["navbar.component.scss"]
})
export class NavbarComponent {
  @Output()
  sidebarTogglerStateChange: EventEmitter<boolean> = new EventEmitter();
  onSidebarToggleStateChange(currentState: boolean) {
    this.sidebarTogglerStateChange.emit(currentState);
  }
}
