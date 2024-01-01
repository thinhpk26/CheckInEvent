import { Component, Type } from '@angular/core';
import { ShowNavService } from '../../../service/show-nav/show-nav.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../service/user-service/user-service.service';
import { LoadingService } from '../../../service/loading/loading.service';
import { PopupFormComponent } from '../../popup-form/popup-form.component';
import { ResponseCustom } from '../../../service/interceptor/auth-interceptor/auth-interceptor.service';
import { PopupUserManagementStage } from '../../../enum/enum';

export class User {
  public id?: string;
  public fullName?: string;
  public email?: string;
  public generation?: number;
  public phoneNumber?: string;
  public image?: string;
  public facebook?: string;

  constructor() {}
}

export interface DataForm {
  fullName: string;
  email: string;
  generation: number;
  phoneNumber: string;
  password: string,
  facebook: string
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, PopupFormComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent {
  constructor(private isShowSV: ShowNavService, private userSV: UserService, private loadingSV: LoadingService) {}

  // Trạng thái của popup
  popupStage: PopupUserManagementStage = PopupUserManagementStage.Create;
  // Tiêu đề của popup
  popupTitle: string = this.getTitleByStage(PopupUserManagementStage.Create);

  // lưu trữ trạng thái đóng mở của popup
  isShowPopup: boolean = false;

  // Lưu trữ dữ liệu trả về
  data?: {
    count: number,
    users: User[],
  };

  // Lưu trữ các giá trị để lấy dữ liệu các người dùng
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

  // Lưu trữ dữ liệu form
  dataForm: DataForm = {
    fullName: "",
    email: "",
    generation: 0,
    phoneNumber: "",
    password: "",
    facebook: "",
  };

  // Lưu trữ id dòng muốn hành động
  rowId: string = "";

  ngOnInit(): void {
    setTimeout(() => {
      this.isShowSV.setDisplayNav(true);
    });
    this.loadTable();
  }

  // Load dữ liệu của bảng
  loadTable() {
    this.loadingSV.show();
    this.userSV
      .getAllUsers(
        this.paramTable.page,
        this.paramTable.limit,
        this.paramTable.sort,
        this.paramTable.q,
        this.paramTable.isCheckin
      )
      .subscribe((res: ResponseCustom) => {
        if(res.isSuccess) {
          this.data = res.data.data;
        }
        this.loadingSV.hide();
      },
      (error) => {
        this.loadingSV.hide();
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

  // Sự kiện mở popup
  openPopup() {
    this.isShowPopup = true;
  }

  // Sự kiện xác nhận trong popup 
  confirmPopup(e: any) {
    switch(this.popupStage) {
      case PopupUserManagementStage.Create:
        this.createUser(e);
        break;
      case PopupUserManagementStage.Update:
        this.updateUser(e);
        break;
    }
  }

  // Tạo người dùng
  createUser(e:any) {
    this.loadingSV.show();
    this.dataForm.generation = Number(this.dataForm.generation);
    this.userSV.createUser(this.dataForm).subscribe(data => {
      this.resetDataForm();
      this.loadTable();
      this.loadingSV.hide();
      this.isShowPopup = false;
    }, error => {
      this.loadingSV.hide();
      this.isShowPopup = false;
    })
  }

  // Cập nhật người dùng
  updateUser(e: any) {
    this.loadingSV.show();
    this.dataForm.generation = Number(this.dataForm.generation);
    this.userSV.updateUser(this.rowId, this.dataForm).subscribe(data => {
      this.resetDataForm();
      this.loadTable();
      this.loadingSV.hide();
      this.isShowPopup = false;
    }, error => {
      this.loadingSV.hide();
      this.isShowPopup = false;
    })
  }

  // Sự kiện Xóa người dùng
  deleteUser(e: any, rowId: string) {
    this.loadingSV.show();
    this.userSV.deleteUser(rowId).subscribe(data => {
      this.loadTable();
      this.loadingSV.hide();
    }, error => {
      this.loadingSV.hide();
      this.isShowPopup = false;
    })
  }

  // Sự kiện cập nhật người dùng
  updateUserClick(e: any, rowId: string) {
    this.rowId = rowId;
    this.popupStage = PopupUserManagementStage.Update;
    this.popupTitle = this.getTitleByStage(this.popupStage);
    this.importIntoPopup(rowId);
    this.openPopup();
  }

  // Import dữ liệu vào trong popup
  importIntoPopup(id: string) {
    const findedUser = this.data?.users.find(user => {
      return user.id === id;
    });

    this.dataForm.generation = findedUser?.generation!;
    this.dataForm.fullName = findedUser?.fullName!;
    this.dataForm.email = findedUser?.email!;
    this.dataForm.facebook = findedUser?.facebook!;
    this.dataForm.phoneNumber = findedUser?.phoneNumber!;
  }

  // Reset lại dataform
  resetDataForm() {
    this.dataForm.fullName = "";
    this.dataForm.email = "";
    this.dataForm.generation = 0;
    this.dataForm.phoneNumber = "";
    this.dataForm.password = "";
    this.dataForm.facebook = "";
  }

  // Lấy title theo trạng thái popup
  getTitleByStage(stage: PopupUserManagementStage) {
    switch(stage) {
      case PopupUserManagementStage.Create:
        return "Tạo mới người dùng";
      case PopupUserManagementStage.Update:
        return "Sửa đổi người dùng";
      default:
        return "";
    }
  }
}
