import { LayoutState } from "./../models/layout.model";
import { combineReducers, ActionReducer } from "@ngrx/store";
import * as Brand from "@container/brand/brand.reducers";

export const reducers: ActionReducer<LayoutState> = combineReducers({
  sidebarState: Brand.reducer
});
