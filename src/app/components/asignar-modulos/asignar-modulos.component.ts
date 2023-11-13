import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-asignar-modulos',
  templateUrl: './asignar-modulos.component.html',
  styleUrls: ['./asignar-modulos.component.scss']
})
export class AsignarModulosComponent implements OnInit{

  constructor(public api: ApiService, public alert: AlertService, public config: DynamicDialogConfig, public ref: DynamicDialogRef){}

  roles:any;
  selectedRole:any;
  data:any;

  ngOnInit(): void {
    this.data = this.config.data;
    this.api.GetMethod('Usuario/GetAllRoles').subscribe(x=>{
      if(x.error){
        this.alert.error('Error', 'Ocurrio un error inesperado, intente de nuevo mas tarde.')
      }else{
        this.roles = x.data;
      }
    })
  }

  UpdateUsers(){
    let params = {
      RoleID :this.selectedRole,
      UserID: this.data.userID
    };
    this.api.PostMethod(params, 'Usuario/UpdateUser').subscribe(x=>{
      if(x.error){

      }else{
        this.alert.success('Ok','Se asignó correctamente los cambios, reinicie la pagina para que se reflejen los cambios.')
        this.ref.close();
      }
    })
  }

}
