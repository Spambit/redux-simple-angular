import { SidebarActionsUnion, SidebarTogglerActionType } from "./brand.actions";
import { SidebarLayoutState } from "./brand.model";
export function reducer(
  state: SidebarLayoutState = SidebarLayoutState.didClose,
  action: SidebarActionsUnion
): SidebarLayoutState {
  const payload: SidebarLayoutState = action.payload;
  switch (action.type) {
    case SidebarTogglerActionType.DidClose:
    case SidebarTogglerActionType.WillClose:
    case SidebarTogglerActionType.ShouldClose:
    case SidebarTogglerActionType.DidOpen:
    case SidebarTogglerActionType.WillOpen:
    case SidebarTogglerActionType.ShouldOpen:
      return payload; // TODO -
    default:
      return state;
  }
}
