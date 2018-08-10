import { User } from "./user.model";
export class AuthState {
  readonly isLoggedIn: boolean;
  readonly user: User;
  private constructor(isLoggedIn = false, user: User = User.createDummyUser()) {
    this.isLoggedIn = isLoggedIn;
    this.user = user;
  }
  public static createDefaultState() {
    return new AuthState();
  }
  public static createNewState(isLoggedIn = false, user: User = User.createDummyUser()): AuthState {
    return new AuthState(isLoggedIn, user);
  }
}
