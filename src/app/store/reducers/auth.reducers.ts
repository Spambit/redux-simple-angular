import { AuthState } from "./../models/auth.model";
import { AuthActionsUnion, AuthActionType } from "../actions/auth.actions";
export function reducer(
  state: AuthState = AuthState.createDefault(),
  action: AuthActionsUnion
): AuthState {
  const payload: AuthState = action.payload;
  console.log(`Action: ${action.type} payload: ${JSON.stringify(payload)}`);
  switch (action.type) {
    case AuthActionType.LOGGED_IN:
    case AuthActionType.LOGGED_OUT:
    case AuthActionType.ERROR:
      return {...state, ...payload};
    default:
      return state;
  }
}
