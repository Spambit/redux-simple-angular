import { SidebarLayoutState } from '@container/brand/brand.model';
import { AppState } from "./../models/index";
import { LayoutState } from "./../models/layout.model";
import { AuthState } from "./../models/auth.model";
import { Action } from "@ngrx/store";
export interface YTubeActions extends Action {
  payload?: AuthState | LayoutState | AppState | SidebarLayoutState;
}
