import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Clone the request and replace the original headers with
    if(req.url.startsWith("http://localhost:8080")){
    const authReq = req.clone({
        headers:req.headers.set('Content-Type','application/json')
    });
    return next.handle(authReq);
}
// send cloned request with header to the next handler.
    
  }
}
