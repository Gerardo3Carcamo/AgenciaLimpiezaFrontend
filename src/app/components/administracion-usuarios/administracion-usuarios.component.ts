import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-administracion-usuarios',
  templateUrl: './administracion-usuarios.component.html',
  styleUrls: ['./administracion-usuarios.component.scss']
})
export class AdministracionUsuariosComponent implements OnInit{

  constructor(public api: ApiService, public alert: AlertService){}

  users:any;

  ngOnInit(): void {
    this.api.GetMethod('/Usuarios/GetAllUsers').subscribe(x=>{
      if(x.error){
        this.alert.error('Ocurrio un error inesperado', 'Intente de nuevo mas tarde')
      }else{
        this.users = x.data;
      }
    })
  }

}
