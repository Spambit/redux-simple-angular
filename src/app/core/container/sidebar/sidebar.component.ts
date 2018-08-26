import { SidebarLayoutState } from "../brand/brand.model";
import { Subscription } from "rxjs";
import * as fromStore from "@store/index";
import { Store } from "@ngrx/store";
import { Component, OnInit, OnDestroy, HostBinding } from "@angular/core";
import { Animations } from "@shared/animations";

@Component({
  moduleId: module.id,
  selector: "yt-sidebar",
  templateUrl: "sidebar.component.html",
  styleUrls: ["sidebar.component.scss"],
  animations: [
    Animations.slideLeftAnimation,
    Animations.OverlayAnimation,
    Animations.fadeInFadeOutAnimation
  ]
  // host: {
  //   "[class.show]": "sidebarShouldAppear",
  //   "[class.hide]": "sidebarDidDisappear"
  // }
})
export class SidebarComponent implements OnInit, OnDestroy {
  private stateChangeSubscription: Subscription;
  sidebarWillAppear = false;
  sidebarWillDisappear = false;
  sidebarDidAppear = false;
  sidebarDidDisappear = false;
  sidebarShouldAppear = false;
  sidebarShouldDisappear = false;
  constructor(private store: Store<fromStore.AppState>) {}

  // @HostBinding("@fadeInFadeOut")
  // get fadeInFadeOut() {
  //   return this.sidebarShouldAppear ? "in" : "out";
  // }

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

  sidebarSlideDidStart($event) {
    if (this.sidebarWillDisappear) {
      return;
    }
    this.sidebarWillAppear = $event.toState === "appear";
    this.sidebarWillDisappear = $event.toState === "disappear";
    if (this.sidebarWillAppear) {
      this.store.dispatch(new fromStore.SidebarWillOpenAction());
    } else {
      this.store.dispatch(new fromStore.SidebarWillCloseAction());
    }
  }

  sidebarSlideDidEnd($event) {
    // TODO - Why animations callbacks are called twice ?
    if (this.sidebarDidDisappear) {
      return;
    }
    this.sidebarDidDisappear = $event.toState === "disappear";
    this.sidebarDidAppear = $event.toState === "appear";
    if (this.sidebarDidAppear) {
      this.store.dispatch(new fromStore.SidebarDidOpenAction());
    } else {
      this.store.dispatch(new fromStore.SidebarDidCloseAction());
    }
  }

  ngOnDestroy() {
    if (!this.stateChangeSubscription.closed) {
      this.stateChangeSubscription.unsubscribe();
    }
  }
}
