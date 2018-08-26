import { User } from "./user.model";
import * as Utils from "@shared/utils";
export class AuthState {
  readonly isLoggedIn: boolean;
  readonly user?: User;
  readonly status: string = "Ok";
  readonly error?: string; // TODO - more accurate type
  readonly lastLoggedInUser?: User;
  private constructor(isLoggedIn = false, user: User = User.create()) {
    this.isLoggedIn = isLoggedIn;
    this.user = user;
    this.lastLoggedInUser = user;
  }
  public static createDefault() {
    return new AuthState();
  }
  public static createDefaultFromState(oldState: AuthState) {
    const state = new AuthState();
    Utils.setProperty(state, "lastLoggedInUser", oldState.lastLoggedInUser);
    return state;
  }

  public static createNew(
    isLoggedIn = false,
    user: User = User.create()
  ): AuthState {
    return new AuthState(isLoggedIn, user);
  }

  public static createWithError(error: string): AuthState {
    return {
      isLoggedIn: false,
      status: "Not Ok",
      error
    };
  }
}
