import { AuthState } from "./auth.model";
import { createSelector } from "@ngrx/store";

export interface AppState {
  auth: AuthState;
}

export const selectAuthState = (state: AppState) => state.auth;
export const selectLoginState = createSelector(selectAuthState, (state: AuthState) => {
  return state.isLoggedIn;
});

export const defaultAppState: AppState = {
  auth: AuthState.createDefaultState()
};
