import { Http } from "@angular/http";
import { fromEvent, Subscription } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class PingService {
  private subscription: Subscription;
  constructor(
    private http: Http,
    private online$ = fromEvent(window, "online"),
    offline$ = fromEvent(window, "offline")
  ) {}
  private pingInternal() {
    return new Promise((resolve, reject) => {
      subscription = this.http
        .get("https://via.placeholder.com/350x150")
        .subscribe(undefined, e => reject(e), () => resolve());
    });
  }

  public ping() : Promise {
    this.pingInternal().then()
  }
  observeNetworkChange() : Observable<boolean>
}
