import { AuthState } from './../models/auth.model';
import { YTubeActions } from "@store/actions/ytube-actions";
import { LoginService } from "~/app/core/services/google/login.service";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import * as fromActions from "../actions";
import { map, mapTo, tap, switchMap, catchError } from "rxjs/operators";

@Injectable()
export class AuthEffects {
  constructor(private loginService: LoginService, private actions$: Actions) {}
  @Effect()
  loginAction$: Observable<YTubeActions> = this.actions$.pipe<YTubeActions>(
    ofType(fromActions.AuthActionType.LOGIN),
    mapTo({ type: fromActions.AuthActionType.LOGINNG_IN }),
    switchMap(_ => this.loginService.login()),
    map(isSuccess => {
      if (isSuccess) {
        return {
          type: fromActions.AuthActionType.LOGGED_IN,
          payload: AuthState.createNewState()
        };
      } else {
        return {
          type: fromActions.AuthActionType.ERROR,
          payload: AuthState.createWithError(`Could not login. Check your internet connectivity.`)
        };
      }
    }),
    catchError(err =>
      of({ type: fromActions.AuthActionType.ERROR, payload: err })
    )
  );
}
