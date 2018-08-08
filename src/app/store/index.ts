import { NgModule } from "@angular/core";
import { reducers } from "~/app/store/reducers";
import { StoreModule, ActionReducer, MetaReducer } from "@ngrx/store";

// console.log all actions
function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log("state", state);
    console.log("action", action);

    return reducer(state, action);
  };
}

const metaReducers: MetaReducer<any>[] = [debug];
export class ApplicationStore {
  static moduleWithProviders = StoreModule.forRoot(reducers, { metaReducers });
}
