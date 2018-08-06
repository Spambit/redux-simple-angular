import { Injectable, OnInit } from "@angular/core";
import { environment } from "~/environments/environment";

@Injectable()
export class LoginService {
  private googleAuth: any;
  private isLoggedIn: boolean;
  constructor() {
    this.loadGoogleApi();
  }

  private initClient(): Promise<any> {
    if (!gapi) {
      return Promise.reject("Google Api not available.");
    }

    return gapi.client
      .init({
        apiKey: environment.youtube_api_key,
        clientId: environment.youtube_client_id,
        scope: "https://www.googleapis.com/auth/youtube.force-ssl",
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
        ]
      })
      .then(() => {
        this.googleAuth = gapi.auth2.getAuthInstance();
        // Listen for sign-in state changes.
        this.googleAuth.isSignedIn.listen(isSignedIn =>
          this.updateSigninStatus(isSignedIn)
        );
      });
  }

  private updateSigninStatus(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  private loadGoogleApi() {
    const gapi = "https://apis.google.com/js/api.js";
    const script = document.createElement("script");
    script.addEventListener("load", () => this.googleApiDidLoad());
    script.setAttribute("src", gapi);
    document.body.appendChild(script);
  }

  private googleApiDidLoad() {
    gapi.load("client:auth2", () => this.initClient());
  }

  public login() {
    if (this.isLoggedIn) {
      this.googleAuth.signOut();
    } else {
      this.googleAuth.signIn();
    }
  }
}
