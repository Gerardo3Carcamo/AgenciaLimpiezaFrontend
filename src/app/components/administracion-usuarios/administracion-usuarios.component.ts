import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { AsignarModulosComponent } from '../asignar-modulos/asignar-modulos.component';
import { CrearCuadrillaComponent } from './modales/crear-cuadrilla/crear-cuadrilla.component';
import { AgregarAMiCuadrillaComponent } from './modales/agregar-a-mi-cuadrilla/agregar-a-mi-cuadrilla.component';

@Component({
  selector: 'app-administracion-usuarios',
  templateUrl: './administracion-usuarios.component.html',
  styleUrls: ['./administracion-usuarios.component.scss'],
  providers: [DialogService]
})
export class AdministracionUsuariosComponent implements OnInit{

  constructor(public api: ApiService, public alert: AlertService, public dialogService: DialogService){}

  existeCuadrilla:boolean;
  usersCuadrilla:any;
  spaceBottom:number = 12;
  cuadrilla:any
  user: any = localStorage.getItem('session')
  users:any;
  ref: DynamicDialogRef = new DynamicDialogRef;
  itemAdd: any = [
    {
      tooltipOptions: {
        tooltipLabel: 'Agregar usuario a mi cuadrilla'
      },
      icon: 'pi pi-user-plus',
      command: () =>{
        this.openAgregarAMiCuadrilla();
      }
    },
    {
      tooltipOptions: {
        tooltipLabel: 'Crear cuadrilla'
      },
      icon: 'pi pi-users',
      command: () =>{
        this.openCrearCuadrilla()
      }
    },
  ]

  ngOnInit(): void {
    console.log(this.user)
    this.GetDataUsers();
  }

  GetCuadrilla(){
    this.api.PostMethod({UserID: parseInt(localStorage.getItem("userID"))}, 'Cuadrilla/GetCuadrillaByUser').subscribe((x:any)=>{
      if(!x.error){
        this.itemAdd.splice(1, 1);
        this.spaceBottom = 9;
        this.cuadrilla = x.data;
        console.log(this.cuadrilla)
        localStorage.setItem("cuadrilla", x.data.cuadrillaID.toString())
      }
    });
  }

  GetDataUsers(){
    this.api.GetMethod('Usuario/GetAllUsers').subscribe(x=>{
      if(x.error){
        this.alert.error('Error', 'Ocurrio un error inesperado, intente de nuevo más tarde')
      }else{
        this.users = x.data;
        this.GetCuadrilla();
        this.GetUsersOnMyCuadrilla();
      }
    });
  }

  GetUsersOnMyCuadrilla(){
    this.api.PostMethod({UserID: parseInt(localStorage.getItem("userID"))}, 'Cuadrilla/GetUsersOnMyCuadrilla').subscribe(x=>{
      if(!x.error){
        this.usersCuadrilla = x.data;
        console.log(this.usersCuadrilla)
      }else{
        this.alert.error('Error', 'No se pudo obtener los usuarios asignados a la cuadrilla actual');
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

  openCrearCuadrilla(){
    this.ref =  this.dialogService.open(CrearCuadrillaComponent, {
      header: 'Crear cuadrilla',
      width: '70%',
      contentStyle: {"overflow": "hidden"},
      baseZIndex: 10000,
      maximizable: true
    });
    this.ref.onClose.subscribe(res => {
      this.GetCuadrilla();
    })
  }

  openAgregarAMiCuadrilla(){
    this.ref =  this.dialogService.open(AgregarAMiCuadrillaComponent, {
      header: 'Agregar usuarios a mi cuadrilla',
      width: '70%',
      contentStyle: {"overflow": "hidden"},
      baseZIndex: 10000,
      maximizable: true
    });
    this.ref.onClose.subscribe(res => {
      this.GetCuadrilla();
      this.GetUsersOnMyCuadrilla()
    })
  }

}
