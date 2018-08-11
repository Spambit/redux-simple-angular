import { LayoutState } from "./layout.model";
import { AuthState } from "./auth.model";
import { createSelector } from "@ngrx/store";

export interface AppState {
  auth: AuthState;
  layout: LayoutState;
}

export const selectAuthState = (state: AppState) => state.auth;
export const selectLayoutState = (state: AppState) => state.layout;
export const selectLoginState = createSelector(
  selectAuthState,
  (state: AuthState) => {
    return state.isLoggedIn;
  }
);
export const selectSidebarState = createSelector(
  selectLayoutState,
  (state: LayoutState) => {
    return state.sidebarState;
  }
);

export const defaultAppState: AppState = {
  auth: AuthState.createDefaultState(),
  layout: LayoutState.createDefaultState()
};
