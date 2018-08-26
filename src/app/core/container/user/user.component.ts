import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { Component, OnInit, OnDestroy } from "@angular/core";
import * as fromStore from "@store/index";
import { NetworkObserverService } from "~/app/core/services/network-observer.service";

@Component({
  moduleId: module.id,
  selector: "yt-user",
  templateUrl: "user.component.html",
  styleUrls: ["user.component.scss"]
})
export class UserComponent implements OnInit, OnDestroy {
  loggedInUserName: string;
  loggedInUserPicUrl: string;
  private authObserverSubscription: Subscription;
  private networkObserverSubscription: Subscription;
  online: boolean = navigator.onLine;
  constructor(private store: Store<fromStore.AppState>,
  private networkObserver: NetworkObserverService) {}
  get onlineStatusMsg() {
    return this.online ? "Online" : "Offline";
  }
  ngOnInit(): void {
    this.authObserverSubscription = this.store
      .select(fromStore.selectAuthState)
      .subscribe(authState => {
        this.loggedInUserName = authState.user.name;
        this.loggedInUserPicUrl = authState.user.profilePic;
      });
    this.networkObserverSubscription = this.networkObserver.observeNetworkChange().subscribe((isOnline) => {
      this.online = isOnline;
    });
  }
  ngOnDestroy(): void {
    this.authObserverSubscription.unsubscribe();
  }
}
