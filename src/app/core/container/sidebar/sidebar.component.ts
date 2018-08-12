import { SidebarLayoutState } from "../brand/brand.model";
import { Subscription } from "rxjs";
import * as fromStore from "./../../../store";
import { Store } from "@ngrx/store";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Animations } from "@shared/animations";

@Component({
  moduleId: module.id,
  selector: "yt-sidebar",
  templateUrl: "sidebar.component.html",
  styleUrls: ["sidebar.component.scss", "sidebar.component.nightmode.scss"],
  animations: [Animations.slideLeftAnimation, Animations.OverlayAnimation]
})
export class SidebarComponent implements OnInit {
  private stateChangeSubscription: Subscription;
  sidebarWillAppear = false;
  sidebarWillDisappear = false;
  sidebarDidAppear = false;
  sidebarDidDisappear = false;
  sidebarShouldAppear = false;
  sidebarShouldDisappear = false;
  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.stateChangeSubscription = this.store
      .select(fromStore.selectSidebarState)
      .subscribe((state: SidebarLayoutState) => {
        switch (state) {
          case SidebarLayoutState.shouldOpen:
            this.sidebarShouldDisappear = false;
            this.sidebarShouldAppear = true;
            break;
          case SidebarLayoutState.shouldClose:
            this.sidebarShouldAppear = false;
            this.sidebarShouldDisappear = true;
            break;
          case SidebarLayoutState.willOpen:
            this.sidebarWillAppear = true;
            break;
          case SidebarLayoutState.willClose:
            this.sidebarWillDisappear = true;
            break;
          case SidebarLayoutState.didOpen:
            this.sidebarDidAppear = true;
            break;
          case SidebarLayoutState.didClose:
            this.sidebarDidDisappear = true;
            break;
        }
      });
  }

  get sideBarState() {
    return this.sidebarShouldAppear ? "appear" : "disappear";
  }
  get overlayState() {
    return this.sidebarShouldAppear ? "in" : "out";
  }

  sidebarSlideDidStart($event) {
    this.sidebarWillAppear = $event.toState === "appear";
    this.sidebarWillDisappear = $event.toState === "disappear";
    if (this.sidebarWillAppear) {
      this.store.dispatch(new fromStore.SidebarWillOpenAction());
    } else {
      this.store.dispatch(new fromStore.SidebarWillCloseAction());
    }
  }

  sidebarSlideDidEnd($event) {
    this.sidebarDidDisappear = $event.toState === "disappear";
    this.sidebarDidAppear = $event.toState === "appear";
    if (this.sidebarDidAppear) {
      this.store.dispatch(new fromStore.SidebarDidOpenAction());
    } else {
      this.store.dispatch(new fromStore.SidebarDidCloseAction());
    }
  }

  OnDestroy() {
    if (!this.stateChangeSubscription.closed) {
      this.stateChangeSubscription.unsubscribe();
    }
  }
}
