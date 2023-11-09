import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-asignar-modulos',
  templateUrl: './asignar-modulos.component.html',
  styleUrls: ['./asignar-modulos.component.scss']
})
export class AsignarModulosComponent implements OnInit{

  constructor(public api: ApiService, public alert: AlertService){}

  roles:any;

  ngOnInit(): void {
    this.api.GetMethod('Usuario/GetAllRoles').subscribe(x=>{
      if(x.error){
        this.alert.error('Error', 'Ocurrio un error inesperado, intente de nuevo mas tarde.')
      }else{
        this.roles = x.data;
      }
    })
  }

}
