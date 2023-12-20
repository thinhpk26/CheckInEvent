import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ShowNavService } from '../service/show-nav.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private showNavSV: ShowNavService) {}

  public isShowNav = true;
  
  ngOnInit(): void {
    const me = this;
    this.showNavSV.isShow$.subscribe((value) => {
      me.isShowNav = value;
    })
  }

  public logOutAdmin() {
    this.router.navigate(['admin/login']);
  }

}
