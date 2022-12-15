import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var newUrl = req.url;

    if (req.url.startsWith('~/mlb-api'))
      newUrl = req.url.replace('~/mlb-api', 'https://lookup-service-prod.mlb.com');

    const newRequest = req.clone({
      url: newUrl,
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    return next.handle(newRequest);
  }
}
