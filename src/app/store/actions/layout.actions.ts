import { Action } from '@ngrx/store';
import { SidebarLayoutState } from '@container/brand/brand.model';
export enum LayoutActionType {
  Sidebar = "[Layout] sidebar"
}

export interface LayoutAction extends Action {
  type: LayoutActionType;
  payload: any;
}

export class SidebarAction implements LayoutAction {
  readonly type = LayoutActionType.Sidebar;
  readonly payload: SidebarLayoutState;
  constructor(private state: SidebarLayoutState = SidebarLayoutState.didClose){
    this.payload = state;
  }
}
