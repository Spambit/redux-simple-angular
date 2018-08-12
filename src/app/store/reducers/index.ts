import { AppState } from "./../models/index";
import * as fromAuth from "./auth.reducers";
import * as fromLayout from "./layout.reducers";
import { ActionReducerMap } from "@ngrx/store";
export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  layout: fromLayout.reducers
};
