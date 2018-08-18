import { YTubeActions } from '@store/actions/ytube-actions';
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

export class SidebarShouldOpenAction implements YTubeActions {
  readonly type: string = SidebarTogglerActionType.ShouldOpen;
  readonly payload = SidebarLayoutState.shouldOpen;
}

export class SidebarShouldCloseAction implements YTubeActions {
  readonly type: string = SidebarTogglerActionType.ShouldClose;
  readonly payload = SidebarLayoutState.shouldClose;
}

export class SidebarWillOpenAction implements YTubeActions {
  readonly type: string = SidebarTogglerActionType.WillOpen;
  readonly payload = SidebarLayoutState.willOpen;
}

export class SidebarWillCloseAction implements YTubeActions {
  readonly type: string = SidebarTogglerActionType.WillClose;
  readonly payload = SidebarLayoutState.willClose;
}

export class SidebarDidOpenAction implements YTubeActions {
  readonly type: string = SidebarTogglerActionType.DidOpen;
  readonly payload = SidebarLayoutState.didOpen;
}

export class SidebarDidCloseAction implements YTubeActions {
  readonly type: string = SidebarTogglerActionType.DidClose;
  readonly payload = SidebarLayoutState.didClose;
}

export type SidebarActionsUnion =
SidebarDidCloseAction |
SidebarDidOpenAction|
SidebarWillCloseAction |
SidebarWillOpenAction |
SidebarShouldCloseAction |
SidebarShouldOpenAction;
