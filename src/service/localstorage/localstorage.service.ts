import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  private keyLocal = "checkinevent";
  constructor() { }

  changeKey(newKey: string) {
    this.keyLocal = newKey;
  }

  // Lưu localstorage
  set(key: string, value: string) {
    localStorage.setItem(`${this.keyLocal}_${key}`, value);
  }

  // Lấy localstorage
  get(key: string) : string | null {
    return localStorage.getItem(`${this.keyLocal}_${key}`);
  }

  // Xóa localstorage
  remove(key: string) {
    localStorage.removeItem(`${this.keyLocal}_${key}`);
  }
}
