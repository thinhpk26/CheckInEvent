import { Component } from '@angular/core';
import { ShowNavService } from '../../service/show-nav/show-nav.service';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss'
})
export class UserHomeComponent {
  constructor(private isShowSV: ShowNavService) {

  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.isShowSV.setDisplayNav(false);
    })
  }
}
