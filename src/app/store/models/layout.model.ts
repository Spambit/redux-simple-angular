import { SidebarLayoutState } from "@container/brand/brand.model";
export * from "@container/brand/brand.model";
export class LayoutState {
  constructor(readonly sidebarState: SidebarLayoutState = SidebarLayoutState.didClose) {
  }
  static createDefaultState(): LayoutState {
    return new LayoutState();
  }
}
