import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, lastValueFrom } from 'rxjs';
import { getGlobalConstant } from '../../../global-constants';
import { LocalstorageService } from '../../localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
  private tokenName:string = getGlobalConstant("tokenLocalName");
  constructor(private http: HttpClient, private localStorageSV: LocalstorageService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.getAuthToken(req, next);
  }

  getAuthToken(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorageSV.get(this.tokenName);
    // if(token === null) {
      
    // }
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })

    return next.handle(authReq);
  }

}
