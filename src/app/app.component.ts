import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  public isShowNav = true;
  
  ngOnInit(): void {
    if(window.location.href.includes("/register")) {
      this.isShowNav = false;
    }
  }

  public logOutAdmin() {
    this.router.navigate(['admin/login']);
  }

}
