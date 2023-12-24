import { Component, OnInit } from '@angular/core';
import { ShowNavService } from '../../../service/show-nav/show-nav.service';

@Component({
  selector: 'app-define-by-qrcode',
  standalone: true,
  imports: [],
  templateUrl: './define-by-qrcode.component.html',
  styleUrl: './define-by-qrcode.component.scss'
})
export class DefineByQrcodeComponent implements OnInit{
  constructor(private isShowSV: ShowNavService) {

  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.isShowSV.setDisplayNav(true);
    })
  }
}
