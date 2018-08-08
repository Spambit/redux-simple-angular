import { AppState } from "./../models/index";
import * as fromAuth from "~/app/store/reducers/auth.reducers";
import { ActionReducerMap } from "@ngrx/store";

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer
};
