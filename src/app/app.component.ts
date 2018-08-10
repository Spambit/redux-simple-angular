import { Animations } from "~/app/shared/animations";
import { Component } from "@angular/core";

@Component({
  selector: "yt-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [Animations.slideLeftAnimation, Animations.OverlayAnimation]
})
export class AppComponent {
  title = "YTube";
  get sideBarState() {
    return this.sidebarShouldAppear ? "appear" : "disappear";
  }
  get overlayState() {
    return this.sidebarShouldAppear ? "in" : "out";
  }
  sidebarWillAppear = false;
  sidebarWillDisappear = false;
  sidebarDidAppear = false;
  sidebarDidDisappear = false;
  sidebarShouldAppear = false;
  sidebarShouldDisappear = false;
  onSidebarTogglerStateChange(shouldOpen: boolean) {
    this.sidebarShouldAppear = shouldOpen ? true : false;
    this.sidebarShouldDisappear = !shouldOpen ? true : false;
  }

  sidebarSlideDidStart($event) {
    this.sidebarDidAppear = false;
    this.sidebarDidDisappear = false;
    this.sidebarWillAppear = $event.toState === "appear";
    this.sidebarWillDisappear = $event.toState === "disappear";
  }

  sidebarSlideDidEnd($event) {
    this.sidebarDidDisappear = $event.toState === "disappear";
    this.sidebarDidAppear = $event.toState === "appear";
    this.sidebarWillAppear = false;
    this.sidebarWillDisappear = false;
  }
}
