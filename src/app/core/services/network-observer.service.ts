import { Http } from "@angular/http";
import { fromEvent, Subscription, Observable, Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { merge, mapTo } from "rxjs/operators";

@Injectable()
export class NetworkObserverService {
  private subscription: Subscription;
  private networkChange: Subject<boolean> = new Subject();
  private online$ = fromEvent(window, "online").pipe(mapTo(true));
  private offline$ = fromEvent(window, "offline").pipe(mapTo(false));
  constructor(
    private http: Http,
  ) {
    this.online$.pipe(merge(this.offline$)).subscribe(isOnline => {
      this.networkStatusChange(isOnline);
    });
  }
  private networkStatusChange(isOnline: boolean) {
    if (navigator.onLine) {
      this.ping()
        .then((success: boolean) => {
          this.networkChange.next(success);
        });
    } else {
      this.networkChange.next(false);
    }
  }
  private ping() {
    return new Promise((resolve, reject) => {
      const url = "https://via.placeholder.com/1x1";
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  observeNetworkChange(): Observable<boolean> {
    return this.networkChange;
  }
}
