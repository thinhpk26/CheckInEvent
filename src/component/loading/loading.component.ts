import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../service/loading/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit{
  constructor(private loadingSV: LoadingService) {

  }
  isShow: boolean = false;

  ngOnInit(): void {
    this.loadingSV.isShow.subscribe(data => this.isShow = data);
  }
}
