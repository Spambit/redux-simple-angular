import { Store } from "@ngrx/store";
import { UserService } from "~/app/core/services/google/user.service";
import { AuthState } from "./../models/auth.model";
import { YTubeActions } from "@store/actions/ytube-actions";
import { LoginService } from "~/app/core/services/google/login.service";
import { Observable, of, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import * as fromActions from "../actions";
import { selectAuthState, AppState } from "~/app/store/models";
import {
  map,
  take,
  exhaustMap,
  mergeMap,
  filter,
  tap,
  switchMap,
  catchError
} from "rxjs/operators";

@Injectable()
export class AuthEffects {
  constructor(
    private loginService: LoginService,
    private actions$: Actions,
    private userService: UserService,
    private store$: Store<AppState>
  ) {}

  @Effect()
  loggingInAction$: Observable<YTubeActions> = this.actions$.pipe<YTubeActions>(
    ofType(fromActions.AuthActionType.LOGIN),
    exhaustMap(action => {
      const login$ = this.loginService.login();
      return login$.pipe(
        take(1),
        map<boolean, YTubeActions>(isSuccess => {
          if (isSuccess) {
            return {
              type: fromActions.AuthActionType.LOGGED_IN,
              payload: AuthState.createNew(
                isSuccess,
                this.userService.loggedInUser
              )
            };
          }
          return {
            type: fromActions.AuthActionType.ERROR,
            payload: AuthState.createWithError("login failed")
          };
        }),
        catchError(err => {
          return of({
            type: fromActions.AuthActionType.ERROR,
            payload: AuthState.createWithError(err)
          });
        })
      );
    })
  );

  @Effect()
  logOutAction$: Observable<YTubeActions> = this.actions$.pipe<YTubeActions>(
    ofType(fromActions.AuthActionType.LOGOUT),
    exhaustMap(_ => {
      return this.loginService.logout().pipe(
        take(1),
        map<boolean, YTubeActions>(isLoggedIn => {
          if (!isLoggedIn) {
            let oldState: AuthState;
            this.store$
              .select(selectAuthState)
              .pipe(take(1))
              .subscribe(val => (oldState = val));
            return {
              type: fromActions.AuthActionType.LOGGED_OUT,
              payload: AuthState.createDefaultFromState(oldState)
            };
          }
          return {
            type: fromActions.AuthActionType.ERROR,
            payload: AuthState.createWithError("logout failed"),
          };
        }),
        catchError(err =>
          of({
            type: fromActions.AuthActionType.ERROR,
            payload: AuthState.createWithError(err)
          })
        )
      );
    })
  );
}
