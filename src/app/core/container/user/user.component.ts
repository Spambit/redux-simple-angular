import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { Component, OnInit, OnDestroy } from "@angular/core";
import * as fromStore from "@store/index";

@Component({
  moduleId: module.id,
  selector: "yt-user",
  templateUrl: "user.component.html",
  styleUrls: ["user.component.scss"]
})
export class UserComponent implements OnInit, OnDestroy {
  loggedInUserName: string;
  loggedInUserPicUrl: string;
  private subscription: Subscription;
  constructor(private store: Store<fromStore.AppState>) {}
  ngOnInit(): void {
    this.subscription = this.store
      .select(fromStore.selectAuthState)
      .subscribe(authState => {
        this.loggedInUserName = authState.user.name;
        this.loggedInUserPicUrl = authState.user.profilePic;
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
