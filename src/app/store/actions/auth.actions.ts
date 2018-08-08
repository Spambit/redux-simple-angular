import { Action } from "@ngrx/store";
export enum AuthActionType {
  LOGIN = "[Auth] login",
  LOGOUT = "[Auth] logout"
}

export class LoginAction implements Action {
  readonly type = AuthActionType.LOGIN;
}

export class LogoutAction implements Action {
  readonly type = AuthActionType.LOGOUT;
}

export type AuthActionsUnion = LoginAction | LogoutAction;
