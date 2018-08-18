import { AuthState } from "./../models/auth.model";
import { AuthActionsUnion, AuthActionType } from "../actions/auth.actions";
export function reducer(
  state: AuthState = AuthState.createDefaultState(),
  action: AuthActionsUnion
): AuthState {
  const payload: AuthState = action.payload;
  switch (action.type) {
    case AuthActionType.LOGINNG_IN:
    case AuthActionType.LOGGED_IN:
    case AuthActionType.LOGGED_OUT:
    case AuthActionType.LOGINNG_OUT: // TODO - implement
    case AuthActionType.ERROR:
      return {...state, ...payload};
    default:
      return state;
  }
}
