import { User } from "@store/models/user.model";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  constructor() {}
  get loggedInUser(): User | undefined {
    const googleAuth = gapi.auth2.getAuthInstance();
    if (!googleAuth) {
      return; // TODO: Implement an Anonymous user who can operate youtube - if possible.
    }
    const googleUser = googleAuth.currentUser.get();
    if (!googleUser.isSignedIn()) {
      return;
    }

    const userProfile = googleUser.getBasicProfile();
    return User.create(userProfile.getGivenName(), userProfile.getImageUrl());
  }
}
