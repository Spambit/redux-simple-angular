import { Http } from '@angular/http';
import { Injectable, OnInit } from "@angular/core";
import { environment } from "~/environments/environment";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable()
export class LoginService {
  private login$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private googleAuth: any;
  constructor(private http: Http) {
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
    this.login$.next(isLoggedIn);
  }

  private loadGoogleApi() {
    const gapi = "https://apis.google.com/js/api.js";
    const script = document.createElement("script");
    script.addEventListener("load", () => this.googleApiDidLoad());
    script.setAttribute("src", gapi);
    document.body.appendChild(script);
  }

  private googleApiDidLoad() {
    gapi.load("client:auth2", () => {
      this.initClient().catch(e => {
        this.login$.error(e);
      });
    });
  }

  public login(): Observable<boolean> {
    this.googleAuth.signIn().catch(e => this.login$.error(e));
    return this.login$; // TODO - check its deferness later - if signIn immediately emits next.
  }
  public logout(): Observable<boolean> {
    this.googleAuth.signOut().catch(e => this.login$.error(e));
    return this.login$;
  }
}
