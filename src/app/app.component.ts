import { Animations } from '@shared/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [Animations.slideLeftAnimation]
})
export class AppComponent {
  title = 'app';
  get sideBarState() {
    return this.sidebarShouldAppear ? 'appear' : 'disappear';
  }
  sidebarWillAppear = false;
  sidebarDidAppear = false;
  sidebarDidDisappear = false;
  sidebarShouldAppear = false;
  onSidebarTogglerStateChange(shouldOpen: boolean) {
    this.sidebarShouldAppear = shouldOpen;
  }

  sidebarSlideDidStart($event) {
    this.sidebarWillAppear = $event === 'appear' ? true : false;
  }

  sidebarSlideDidEnd($event) {
    this.sidebarDidDisappear = $event === 'disappear' ? true : false;
    this.sidebarDidAppear = $event === 'appear' ? true : false;
  }
}
