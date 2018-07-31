import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-brand',
    templateUrl: 'brand.component.html',
    styleUrls: ['brand.component.scss']
})
export class BrandComponent {
  private sidebarTogglerState = false;
  @Output() sidebarTogglerStateChange: EventEmitter<boolean> = new EventEmitter();
  onSidebarTogglerClick() {
    this.sidebarTogglerState = !this.sidebarTogglerState;
    this.sidebarTogglerStateChange.emit(this.sidebarTogglerState);
  }
}
