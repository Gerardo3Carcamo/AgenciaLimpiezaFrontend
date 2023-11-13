import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(public api: ApiService, public alert: AlertService){}

  session:any;

  ngOnInit(): void {
    this.session = localStorage.getItem('session')
  }

}
