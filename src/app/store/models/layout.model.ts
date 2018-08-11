import { SidebarLayoutState } from "@container/brand/brand.model";

export class LayoutState {
  constructor(public sidebarState: SidebarLayoutState = SidebarLayoutState.didClose) {
  }
  static createDefaultState(): LayoutState {
    return new LayoutState();
  }
}
