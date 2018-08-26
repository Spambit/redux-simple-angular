import * as fromLayout from "./layout.model";
import { AuthState } from "./auth.model";
import { createSelector } from "@ngrx/store";

export * from "./layout.model";
export * from "./auth.model";
export * from "./user.model";

export interface AppState {
  auth: AuthState;
  layout: fromLayout.LayoutState;
}

export const selectAuthState = (state: AppState) => state.auth;
export const selectLayoutState = (state: AppState) => state.layout;
export const selectLoginState = createSelector(
  selectAuthState,
  (state: AuthState) => {
    return state.isLoggedIn;
  }
);
export const selectLoggedInUser = createSelector(
  selectAuthState,
  (state: AuthState) => {
    return state.user;
  }
);
export const selectSidebarState = createSelector(
  selectLayoutState,
  (state: fromLayout.LayoutState) => {
    return state.sidebarState;
  }
);

export const defaultAppState: AppState = {
  auth: AuthState.createDefault(),
  layout: fromLayout.LayoutState.createDefaultState(),
};
