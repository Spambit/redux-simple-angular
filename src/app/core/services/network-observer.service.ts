import { Http } from "@angular/http";
import { fromEvent, Subscription, of, Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class NetworkObserverService {
  private subscription: Subscription;
  private online: boolean = navigator.onLine;
  constructor(
    private http: Http,
    private online$ = fromEvent(window, "online"),
    offline$ = fromEvent(window, "offline")
  ) {
    online$.subscribe(event => {
      this.networkStatusChange();
    });
    offline$.subscribe(event => {
      this.networkStatusChange();
    });
  }
  private networkStatusChange() {
    if (navigator.onLine) {
      this.ping()
        .then(() => {
          this.online = true;
        })
        .catch(() => {
          this.online = false;
        });
    } else {
      this.online = false;
    }
  }
  private ping() {
    return new Promise((resolve, reject) => {
      this.subscription = this.http
        .get("https://via.placeholder.com/350x150")
        .subscribe(undefined, e => reject(e), () => resolve());
    });
  }

  observeNetworkChange(): Observable<boolean> {
    return of(this.online);
  }
}
