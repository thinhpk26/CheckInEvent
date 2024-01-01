import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _isShow = new BehaviorSubject<boolean>(false);
  isShow = this._isShow.asObservable();
  constructor() { 
    
  }
  hide() {
    this._isShow.next(false);
  };
  show() {
    this._isShow.next(true);
  }
}
