import { User } from "~/app/store/models/user.model";
export class AuthState {
  readonly isLoggedIn;
  readonly user: User;
  private constructor(isLoggedIn = false, user: User = User.createDummyUser()) {
    this.isLoggedIn = isLoggedIn;
    this.user = user;
  }
  public static createDefaultState() {
    return new AuthState();
  }
  public static createNewState(isLoggedIn = false): AuthState {
    return new AuthState(isLoggedIn, User.createDummyUser("" + Date.now()));
  }
}
