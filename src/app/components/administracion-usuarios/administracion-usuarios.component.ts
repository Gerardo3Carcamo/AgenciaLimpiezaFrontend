import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { AsignarModulosComponent } from '../asignar-modulos/asignar-modulos.component';

@Component({
  selector: 'app-administracion-usuarios',
  templateUrl: './administracion-usuarios.component.html',
  styleUrls: ['./administracion-usuarios.component.scss'],
  providers: [DialogService]
})
export class AdministracionUsuariosComponent implements OnInit{

  constructor(public api: ApiService, public alert: AlertService, public dialogService: DialogService){}

  users:any;
  ref: DynamicDialogRef = new DynamicDialogRef;

  ngOnInit(): void {
    this.GetDataUsers();
  }

  GetDataUsers(){
    this.api.GetMethod('Usuario/GetAllUsers').subscribe(x=>{
      if(x.error){
        this.alert.error('Error', 'Ocurrio un error inesperado, intente de nuevo mas tarde')
      }else{
        this.users = x.data;
        console.log(this.users)
      }
    });
  }

  editModules(product){
    console.log(product)
    this.ref =  this.dialogService.open(AsignarModulosComponent, {
      header: 'Asignar modulos a personal',
      width: '70%',
      contentStyle: {"overflow": "hidden"},
      baseZIndex: 10000,
      maximizable: true,
      data: product
    });
    this.ref.onClose.subscribe(res => {

    })
  }

}
