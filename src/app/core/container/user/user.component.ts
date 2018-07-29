import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-user',
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.scss'],
    styles: [`
      :host {
        display: grid;
        align-items: center;
        justify-items: center;
      }
    `]
})
export class UserComponent {

}
