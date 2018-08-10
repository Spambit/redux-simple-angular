import { AuthState } from "../models/auth.model";
import { Action } from "@ngrx/store";
export enum AuthActionType {
  LOGIN = "[Auth] login",
  LOGOUT = "[Auth] logout"
}

export class LoginAction implements Action {
  readonly type = AuthActionType.LOGIN;
  readonly payload: AuthState;
}

export class LogoutAction implements Action {
  readonly type = AuthActionType.LOGOUT;
  readonly payload: AuthState;
}

export type AuthActionsUnion = LoginAction | LogoutAction;
