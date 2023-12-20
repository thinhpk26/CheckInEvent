import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowNavService {
  private isShow = new BehaviorSubject<boolean>(false);
  public isShow$ = this.isShow.asObservable();

  constructor() { }

  public setDisplayNav(isDisplay: boolean) {
    this.isShow.next(isDisplay);
  }
}
