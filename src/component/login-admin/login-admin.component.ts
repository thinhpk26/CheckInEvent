import { Component, OnInit } from '@angular/core';
import { ShowNavService } from '../../service/show-nav/show-nav.service';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.scss'
})
export class LoginAdminComponent implements OnInit{
  constructor(private isShowSV: ShowNavService) {

  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.isShowSV.setDisplayNav(false);
    })
  }
}
