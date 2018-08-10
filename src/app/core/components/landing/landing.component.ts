import * as fromStore from "@store/index";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  moduleId: module.id,
  selector: "yt-landing",
  templateUrl: "landing.component.html",
  styleUrls: ["landing.component.scss"]
})
export class LandingComponent implements OnInit {
  login$: Observable<boolean>;
  constructor(private store: Store<fromStore.AppState>) {}
  ngOnInit() {
    this.login$ = this.store.select(fromStore.selectLoginState);
  }
  login() {
    this.store.dispatch(new fromStore.LoginAction());
  }
  logout() {
    this.store.dispatch(new fromStore.LogoutAction());
  }
}
