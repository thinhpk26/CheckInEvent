import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShowNavService } from '../../../service/show-nav.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  constructor(private isShowSV: ShowNavService) {

  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.isShowSV.setDisplayNav(false);
    })
  }


}
