import { Component, NgZone, OnInit } from '@angular/core';
import { ShowNavService } from '../../../service/show-nav/show-nav.service';

@Component({
  selector: 'app-define-by-email-numberphone',
  standalone: true,
  imports: [],
  templateUrl: './define-by-email-numberphone.component.html',
  styleUrl: './define-by-email-numberphone.component.scss'
})
export class DefineByEmailNumberphoneComponent implements OnInit{
  constructor(private isShowSV: ShowNavService) {

  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.isShowSV.setDisplayNav(true);
    })
  }
}
