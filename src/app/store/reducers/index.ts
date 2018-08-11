import { AppState } from "./../models/index";
import * as fromAuth from "./auth.reducers";
import * as fromLayout from "./layout.reducers";
import { ActionReducerMap } from "@ngrx/store";
export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  layout: fromLayout.reducers
};


// export declare type ActionReducerMap<AppState, Action> = {
//   [p in keyof AppState]: ActionReducer<AppState[p], Action>;
//   auth : ActionReducer<AuthState, Action>,
//   layout : ActionReducer<LayoutState, Action>;
// };
// export declare type ActionReducerMap<T, V extends Action = Action> = {
//   [p in keyof T]: ActionReducer<T[p], V>;
// };
// export interface ActionReducer<AppState,Action> {
//   (state: AppState, action: Action): AppState;
// }
