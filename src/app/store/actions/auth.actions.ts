import { YTubeActions } from "./ytube-actions";
import { AuthState } from "../models/auth.model";
export enum AuthActionType {
  LOGIN = "[Auth] login",
  LOGOUT = "[Auth] logout",
  LOGGED_IN = "[Auth] logged In",
  LOGGED_OUT = "[Auth] logged Out",
  ERROR = "[Auth] error"
}

export class LoginAction implements YTubeActions {
  readonly type = AuthActionType.LOGIN;
  readonly payload: AuthState;
}

export class LoggedInAction implements YTubeActions {
  readonly type = AuthActionType.LOGGED_IN;
  readonly payload: AuthState;
}

export class LogoutAction implements YTubeActions {
  readonly type = AuthActionType.LOGOUT;
  readonly payload: AuthState;
}

export class LoggedOutAction implements YTubeActions {
  readonly type = AuthActionType.LOGGED_OUT;
  readonly payload: AuthState;
}

export class LoginErrorAction implements YTubeActions {
  readonly type = AuthActionType.ERROR;
  readonly payload: AuthState;
}

export type AuthActionsUnion =
  | LoginAction
  | LogoutAction
  | LoggedInAction
  | LoggedOutAction
  | LoginErrorAction;
