import { AuthState } from "./../models/auth.model";
import { YTubeActions } from "@store/actions/ytube-actions";
import { LoginService } from "~/app/core/services/google/login.service";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import * as fromActions from "../actions";
import {
  map,
  mergeMap,
  filter,
  tap,
  switchMap,
  catchError
} from "rxjs/operators";

@Injectable()
export class AuthEffects {
  constructor(private loginService: LoginService, private actions$: Actions) {}

  @Effect()
  loggingInAction$: Observable<YTubeActions> = this.actions$.pipe<YTubeActions>(
    ofType(fromActions.AuthActionType.LOGIN),
    switchMap( action =>
      this.loginService.login().pipe(
        map(isSuccess => {
          if (isSuccess) {
            return {
              type: fromActions.AuthActionType.LOGGED_IN,
              payload: AuthState.createNewState()
            };
          }

          return {
            type: fromActions.AuthActionType.LOGINNG_IN
          };
        }),
        catchError(err => {
          return of({
            type: fromActions.AuthActionType.ERROR,
            payload: AuthState.createWithError(err)
          });
        })
      )
    )
  );

  @Effect()
  logOutAction$: Observable<YTubeActions> = this.actions$.pipe<YTubeActions>(
    ofType(fromActions.AuthActionType.LOGOUT),
    switchMap(_ => {
      return this.loginService.logout();
    }),
    map(isSuccess => {
      if (isSuccess) {
        return {
          type: fromActions.AuthActionType.LOGGED_OUT
        };
      }

      return {
        type: fromActions.AuthActionType.LOGINNG_OUT
      };
    }),
    catchError(err =>
      of({
        type: fromActions.AuthActionType.ERROR,
        payload: AuthState.createWithError(err)
      })
    )
  );
}
