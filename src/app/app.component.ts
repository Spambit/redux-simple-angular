import { Animations } from '@shared/animations';
import { Store } from "@ngrx/store";
import * as fromStore from "@store/index";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "yt-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [Animations.slideLeftAnimation,
    Animations.overlayFadeInfadeOutAnimation,
  Animations.fadeInFadeOutAnimation],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "YTube";
  private sidebarStateSubscription: Subscription;
  sidebarOpened: boolean ;
  private startOfSidebarStateTransition: boolean;
  private endOfSidebarStateTransition: boolean;
  constructor(private store: Store<fromStore.AppState>) {}
  get isSidebarAlive() {
    return this.startOfSidebarStateTransition && !this.endOfSidebarStateTransition;
  }
  get sidebarAnimationValue() {
    return this.startOfSidebarStateTransition ? "in" : "out";
  }
  ngOnInit() {
    this.sidebarStateSubscription = this.store.select(fromStore.selectSidebarState).subscribe((state: fromStore.SidebarLayoutState) => {
      if (state === fromStore.SidebarLayoutState.shouldOpen) {
        this.startOfSidebarStateTransition = true;
        this.endOfSidebarStateTransition = false;
      }
      if (state === fromStore.SidebarLayoutState.didClose) {
        this.endOfSidebarStateTransition = true;
        this.startOfSidebarStateTransition = false;
      }
      console.log(`Sidebar is now opened : ${this.isSidebarAlive}`);
    });
  }

  ngOnDestroy() {
    if ( !this.sidebarStateSubscription.closed ) {
      this.sidebarStateSubscription.unsubscribe();
    }
  }
}
