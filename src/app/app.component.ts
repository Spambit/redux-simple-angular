import { Animations } from '@shared/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [Animations.slideLeftAnimation, Animations.OverlayAnimation]
})
export class AppComponent {
  title = 'app';
  get sideBarState() {
    return this.sidebarShouldAppear ? 'appear' : 'disappear';
  }
  get overlayState() {
    return this.sidebarShouldAppear ? 'in' : 'out';
  }
  sidebarWillAppear = false;
  sidebarDidAppear = false;
  sidebarDidDisappear = false;
  sidebarShouldAppear = false;
  onSidebarTogglerStateChange(shouldOpen: boolean) {
    this.sidebarShouldAppear = shouldOpen;
  }

  addClasses() {
    return {
      opened: this.sidebarShouldAppear,
      closed : this.sidebarDidDisappear
    };

  }

  sidebarSlideDidStart($event) {
    this.sidebarWillAppear = $event.toState === 'appear' ? true : false;
  }

  sidebarSlideDidEnd($event) {
    this.sidebarDidDisappear = $event.toState === 'disappear' ? true : false;
    this.sidebarDidAppear = $event.toState === 'appear' ? true : false;
  }
}
