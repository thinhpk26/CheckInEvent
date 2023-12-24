import { Component, Type } from '@angular/core';
import { ShowNavService } from '../../../service/show-nav/show-nav.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../service/user-service/user-service.service';

export class User {
  public fullName?: string;
  public email?: string;
  public generation?: number;
  public phoneNumber?: string;
  public image?: string;
  public facebook?: string;

  constructor() {}
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent {
  constructor(private isShowSV: ShowNavService, private userSV: UserService) {}

  data?: {
    count: number,
    users: User[],
  };

  paramTable: {
    page: number;
    limit: number;
    sort?: string;
    q?: string;
    isCheckin?: boolean;
  } = {
    page: 1,
    limit: 10,
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.isShowSV.setDisplayNav(true);
    });
    this.loadTable();
  }

  // Load dữ liệu của bảng
  loadTable() {
    this.userSV
      .getAllUsers(
        this.paramTable.page,
        this.paramTable.limit,
        this.paramTable.sort,
        this.paramTable.q,
        this.paramTable.isCheckin
      )
      .subscribe((res: any) => {
        this.data = res.data;
      });
  }

  // Chọn giới hạn bản ghi
  chooseLimit(e: any) {
    this.paramTable.limit = Number.parseInt(e.srcElement.value);
    this.loadTable();
  }

  // Load lại dữ liệu bảng
  reloadTable(e: any) {
    this.loadTable();
  }

  // Xóa người dùng
  deleteUser(e: any) {}

  // Cập nhật người dùng
  updateUser(e: any) {}
}
