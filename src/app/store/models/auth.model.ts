import { User } from "./user.model";
export class AuthState {
  readonly isLoggedIn: boolean;
  readonly user?: User;
  readonly status: string = "Ok";
  readonly error?: string; // TODO - more accurate type
  private constructor(isLoggedIn = false, user: User = User.createDummyUser()) {
    this.isLoggedIn = isLoggedIn;
    this.user = user;
  }
  public static createDefaultState() {
    return new AuthState();
  }
  public static createNewState(
    isLoggedIn = false,
    user: User = User.createDummyUser()
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
