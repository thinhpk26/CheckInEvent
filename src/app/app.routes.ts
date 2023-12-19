import { Routes } from '@angular/router';
import { RegisterComponent } from '../component/register/register/register.component';
import { DefineByEmailNumberphoneComponent } from '../component/define-user/define-by-email-numberphone/define-by-email-numberphone.component';
import { DefineByQrcodeComponent } from '../component/define-user/define-by-qrcode/define-by-qrcode.component';
import { UserManagementComponent } from '../component/user-management/user-management/user-management.component';
import { LoginAdminComponent } from '../component/login-admin/login-admin.component';
import { UserHomeComponent } from '../component/user-home/user-home.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: UserHomeComponent},
  { path: 'checkin/qr-code', component: DefineByQrcodeComponent },
  { path: 'checkin/email-numberphone', component: DefineByEmailNumberphoneComponent },
  { path: 'admin/user-management', component: UserManagementComponent },
  { path: 'admin/login', component: LoginAdminComponent},
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: '**', component: RegisterComponent },
];
