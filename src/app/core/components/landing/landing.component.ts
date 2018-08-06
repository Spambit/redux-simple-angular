import { LoginService } from '~/app/core/services/google/login.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'yt-landing',
    templateUrl: 'landing.component.html',
    styleUrls: ['landing.component.scss']
})
export class LandingComponent {
  constructor(private _loginService: LoginService) {}
  login() {
    this._loginService.login();
  }
}
