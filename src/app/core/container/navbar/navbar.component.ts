import { Animations } from '@shared/animations';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromStore from "@store/index";
import { Component, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "yt-navbar",
  templateUrl: "navbar.component.html",
  styleUrls: ["navbar.component.scss"],
  animations: [Animations.fadeInFadeOutAnimation]
})
export class NavbarComponent implements OnInit {
  login$: Observable<boolean>;
  constructor(private store: Store<fromStore.AppState>) {}
  @Output()
  sidebarTogglerStateChange: EventEmitter<boolean> = new EventEmitter();
  onSidebarToggleStateChange(currentState: boolean) {
    this.sidebarTogglerStateChange.emit(currentState);
  }

  login() {
    this.store.dispatch(new fromStore.LoginAction());
  }

  ngOnInit(): void {
    this.login$ = this.store.select(fromStore.selectLoginState);
  }
}
