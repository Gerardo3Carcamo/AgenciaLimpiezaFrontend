import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-finish-homework',
  templateUrl: './finish-homework.component.html',
  styleUrls: ['./finish-homework.component.scss']
})
export class FinishHomeworkComponent implements OnInit{

  constructor(public api: ApiService, public alert: AlertService){}

  cuadrilla:any;
  homeworks:any;
  ngOnInit(): void {
    this.cuadrilla = localStorage.getItem("cuadrilla");
    this.GetSpecificHomeworks()
  }

  GetSpecificHomeworks(){
    console.log(this.cuadrilla)
    this.api.PostMethod({CuadrillaID: this.cuadrilla}, 'Tarea/GetSpecificHomeworks').subscribe(x=>{
      this.homeworks = x.data;
      console.log(x.data)
    })
  }

  UpdateAssignedHomework(event){
    let params = {
      TareaID: event
    }
    this.api.PostMethod(params, 'Tarea/MarkAsSolvedHomework').subscribe(x=>{
      if(!x.error){
        this.alert.success('OK','Se ha terminado la tarea correctamente')
      }else{
        this.alert.error('Error', 'No se pudo finalizar la tarea, intente de nuevo');
      }
      this.GetSpecificHomeworks();
    })
  }

}
