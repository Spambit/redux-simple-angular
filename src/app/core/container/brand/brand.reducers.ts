import { SidebarActionsUnion } from "./brand.actions";
import { SidebarLayoutState } from "./brand.model";
export function reducer(
  state: SidebarLayoutState = SidebarLayoutState.didClose,
  action: SidebarActionsUnion
): SidebarLayoutState {
    return action.payload;
}
