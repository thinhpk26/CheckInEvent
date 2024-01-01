import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DataForm, User } from '../user-management/user-management/user-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupUserManagementStage } from '../../enum/enum';

@Component({
  selector: 'app-popup-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './popup-form.component.html',
  styleUrl: './popup-form.component.scss'
})
export class PopupFormComponent implements OnInit, OnChanges, AfterViewInit{
  // Tiêu đề
  @Input() title?: string;

  // Hiển thị hay không
  @Input() isShow: boolean = false;
  @Output() isShowChange = new EventEmitter<boolean>();

  // Nhấn nút xác nhận
  @Output('confirm') isConfirm = new EventEmitter();

  // Dữ liệu cho form
  @Input() data: DataForm = {
    fullName: "",
    email: "",
    generation: 0,
    phoneNumber: "",
    password: "",
    facebook: ""
  };
  @Output() dataChange = new EventEmitter<any>();

  // trạng thái của popup
  @Input() stage: PopupUserManagementStage = PopupUserManagementStage.Create;

  constructor() {}

  ngOnInit(): void {
      this.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data);
  }

  ngAfterViewInit(): void {
    console.log(this.data);
  }

  // Chuyển đổi trạng thái
  // replaceStage() {
  //   switch(this.stage) {
  //     case PopupUserManagementStage.Create:
  //       break;
  //     case PopupUserManagementStage.Update:
  //       this.
  //       break;
  //   }
  // }

  // Sự kiện đóng popup
  close() {
    this.isShow = false;
    this.isShowChange.emit(false);
  }

  // Sự kiện mở popup
  open() {
    this.isShow = true;
    this.isShowChange.emit(true);
  }

  // Sự kiện xác nhận popup
  confirm() {
    this.isConfirm.emit();
  }
}
