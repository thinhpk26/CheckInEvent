import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getGlobalConstant } from '../../global-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  private getHostName() {
    return `${getGlobalConstant("hostname")}:${getGlobalConstant("port")}`;
  }

  public getAllUsers(page: number, limit: number, sort?: string, q?: string, isCheckin?: boolean) {
    const params = this.buildParam({page, limit, sort, q, isCheckin});
    const getAllUserUrl = this.getHostName() + `/api/v1/users/?${params}`;
    return this.http.get(getAllUserUrl);
  }

  // build thành param
  private buildParam(paramObject: any):string {
    const params:string[] = [];
    for(const [key, value] of Object.entries(paramObject)) {
      if(value !== null && value !== undefined) {
        params.push(`${key}=${value}`);
      }
    }
    return params.join("&");
  }

}
