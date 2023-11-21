import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit{

  constructor(public api: ApiService, public alert: AlertService){}

  userID:any;
  homeworks:any;
  ngOnInit(): void {
    this.userID = localStorage.getItem("userID");
    this.GetSpecificHomeworks()
  }

  GetSpecificHomeworks(){
    console.log(this.userID)
    this.api.PostMethod({UserID: this.userID}, 'Tarea/GetSpecificHomeworksByUserID').subscribe(x=>{
      this.homeworks = x.data;
      console.log(x.data)
    })
  }

}
