import { Injectable, InjectionToken, Inject } from "@angular/core";
import { timeout } from "rxjs/operators";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";

export const DEFAULT_TIMEOUT = new InjectionToken<number>("defaultTimeout");
export const defaultTimeout = 10000;

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
  constructor(@Inject(DEFAULT_TIMEOUT) private defaultTimeoutInternal) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const timeoutValue = Number(req.headers.get("timeout")) || this.defaultTimeoutInternal;
    return next.handle(req).pipe(timeout(timeoutValue));
  }
}
