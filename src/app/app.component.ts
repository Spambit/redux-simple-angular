import { Animations } from '@shared/animations';
import { Store } from "@ngrx/store";
import * as fromStore from "@store/index";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "yt-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [Animations.slideLeftAnimation, Animations.overlayFadeInfadeOutAnimation],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "YTube";
  private sidebarStateSubscription: Subscription;
  sidebarOpened: boolean ;
  constructor(private store: Store<fromStore.AppState>) {}
  ngOnInit() {
    this.sidebarStateSubscription = this.store.select(fromStore.selectSidebarState).subscribe((state: fromStore.SidebarLayoutState) => {
      this.sidebarOpened = state === fromStore.SidebarLayoutState.shouldOpen ||
      state === fromStore.SidebarLayoutState.willOpen ||
      state === fromStore.SidebarLayoutState.didOpen ;
      console.log(`Sidebar is now opened : ${this.sidebarOpened}`);
    });
  }

  ngOnDestroy() {
    if ( !this.sidebarStateSubscription.closed ) {
      this.sidebarStateSubscription.unsubscribe();
    }
  }
}
