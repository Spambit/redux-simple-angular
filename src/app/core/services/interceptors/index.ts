import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TimeoutInterceptor, defaultTimeout, DEFAULT_TIMEOUT} from './timeout.interceptor';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    [{ provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true }],
    [{ provide: DEFAULT_TIMEOUT, useValue: defaultTimeout }],
})
export class InterceptorModule { }
