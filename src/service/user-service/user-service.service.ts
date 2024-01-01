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

  // host chính
  urlHost = this.getHostName() + `/api/v1/users`;

  // Lấy tất cả người dùng
  public getAllUsers(page: number, limit: number, sort?: string, q?: string, isCheckin?: boolean) {
    const params = this.buildParam({page, limit, sort, q, isCheckin});
    const getAllUserUrl = this.urlHost + `?${params}`;
    return this.http.get(getAllUserUrl);
  }

  // Lấy 1 người dùng
  getUser(id: string) {
    const getUserUrl = this.urlHost + `/${id}`;
    return this.http.get(getUserUrl);
  }

  // Tạo mới user
  createUser(newUser: any) {
    return this.http.post(this.urlHost, newUser);
  }

  // Sửa người dùng
  updateUser(id: string, updatedUser: any) {
    const updateUserUrl = this.urlHost + `/${id}`;
    return this.http.patch(updateUserUrl, updatedUser);
  }

  // Xóa người dùng
  deleteUser(id: string) {
    const deleteUserUrl = this.urlHost + `/${id}`;
    return this.http.delete(deleteUserUrl);
  }

  // build param
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
