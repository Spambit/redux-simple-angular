import { AuthState } from "./../models/auth.model";
import {
  AuthActionsUnion,
  AuthActionType
} from "~/app/store/actions/auth.actions";
export function reducer(
  state: AuthState = AuthState.createDefaultState(),
  action: AuthActionsUnion
): AuthState {
  switch (action.type) {
    case AuthActionType.LOGIN:
      return AuthState.createNewState(true);
    case AuthActionType.LOGOUT:
      return AuthState.createNewState(false);
    default:
      return AuthState.createDefaultState();
  }
}
