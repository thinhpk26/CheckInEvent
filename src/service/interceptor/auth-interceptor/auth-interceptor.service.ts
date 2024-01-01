import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, from, lastValueFrom, map, tap, throwError } from 'rxjs';
import { getGlobalConstant } from '../../../global-constants';
import { LocalstorageService } from '../../localstorage/localstorage.service';

export class ResponseCustom {
  statusCode?: number;
  data?: any;
  isSuccess?: boolean;
  error?: any;
}

@Injectable()
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

    return next.handle(authReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          return event.clone({
            body: {
              statusCode: event.status,
              data: event.body,
              isSuccess: event.ok,
              error: null
            }
          });
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        const responseCustom: ResponseCustom = {
          statusCode: error.status,
          data: null,
          isSuccess: error.ok,
          error: error.message
        };
        return throwError(() => responseCustom);
      })
    );
  }

}
