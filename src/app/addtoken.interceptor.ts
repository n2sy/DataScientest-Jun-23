import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddtokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(request);

    let token = localStorage.getItem('mytoken');
    if (token) {
      let cloneRequest = request.clone({
        headers: new HttpHeaders().set('Authorization', `bearer ${token}`),
      });
      return next.handle(cloneRequest);
    }
    return next.handle(request);
  }
}

export const AddTokenProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AddtokenInterceptor,
  multi: true,
};
