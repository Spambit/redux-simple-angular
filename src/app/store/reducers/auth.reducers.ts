import { AuthState } from "./../models/auth.model";
import { AuthActionsUnion, AuthActionType } from "../actions/auth.actions";
export function reducer(
  state: AuthState = AuthState.createDefaultState(),
  action: AuthActionsUnion
): AuthState {
  const payload = action.payload;
  switch (action.type) {
    case AuthActionType.LOGIN:
      return AuthState.createNewState(true);
    case AuthActionType.LOGOUT:
      return AuthState.createNewState(false);
    default:
      return AuthState.createDefaultState();
  }
}
