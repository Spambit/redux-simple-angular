import { environment } from "~/environments/environment";
import { reducers } from "./reducers";
import { StoreModule, ActionReducer, MetaReducer } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";
export * from "./effects";

export * from "./actions";
export * from "./models";
// console.log all actions
function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log("state", state);
    console.log("action", action);

    return reducer(state, action);
  };
}

const metaReducers: MetaReducer<any>[] = !environment.production
  ? [debug, storeFreeze]
  : [];

export const StoreModuleWithProvider = StoreModule.forRoot(reducers, {
  metaReducers
});
