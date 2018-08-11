import { SidebarLayoutState } from "./brand.model";
import { Action } from "@ngrx/store";

export enum SidebarTogglerActionType {
  ShouldClose = "[Sidebar] should close",
  ShouldOpen = "[Sidebar] should open",
  WillClose = "[Sidebar] will close",
  WillOpen = "[Sidebar] will open",
  DidClose = "[Sidebar] did close",
  DidOpen = "[Sidebar] did open"
}

export class SidebarShouldOpenAction implements Action {
  readonly type: string = SidebarTogglerActionType.ShouldOpen;
  payload = SidebarLayoutState.shouldOpen;
}

export class SidebarShouldCloseAction implements Action {
  readonly type: string = SidebarTogglerActionType.ShouldClose;
  payload = SidebarLayoutState.shouldClose;
}

export class SidebarWillOpenAction implements Action {
  readonly type: string = SidebarTogglerActionType.WillOpen;
  payload = SidebarLayoutState.willOpen;
}

export class SidebarWillCloseAction implements Action {
  readonly type: string = SidebarTogglerActionType.WillClose;
  payload = SidebarLayoutState.willClose;
}

export class SidebarDidOpenAction implements Action {
  readonly type: string = SidebarTogglerActionType.DidOpen;
  payload = SidebarLayoutState.didOpen;
}

export class SidebarDidCloseAction implements Action {
  readonly type: string = SidebarTogglerActionType.DidClose;
  payload = SidebarLayoutState.didClose;
}

export type SidebarActionsUnion =
SidebarDidCloseAction |
SidebarDidOpenAction|
SidebarWillCloseAction |
SidebarWillOpenAction |
SidebarShouldCloseAction |
SidebarShouldOpenAction;
