import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.scss']
})
export class CatalogosComponent implements OnInit{

  constructor(public api: ApiService, public alert: AlertService){}

  tarea:any;
  descripcion:any
  coloniaID:any;
  CodigoPostal: any;
  NombreColonia: any;
  Colonias:any;
  TareasTable:any;

  ngOnInit(): void {
    this.GetColonias();
    this.GetTareas();
  }

  InsertTarea(){
    let params = {
      nombre: this.tarea,
      coloniaID: this.coloniaID,
      descripcion: this.descripcion
    }
    this.api.PostMethod(params, 'Tarea/InsertTarea').subscribe(x=>{
      if(x.error){
        this.alert.error('Error','Intente de nuevo más tarde')
      }else{
        this.alert.success('OK', 'Tarea ingresada correctamente')
        this.tarea = '';
        this.coloniaID = ''
        this.descripcion = '';
        this.GetTareas();
      }
    })
  }

  GetTareas() {
    this.api.GetMethod('Tarea/GetTareas').subscribe(x=>{
      if(x.error){
        this.alert.error('Error', 'Ocurrio un error al recuperar las colonias, intente de nuevo mas tarde')
      }else{
        this.TareasTable = x.data;
      }
    })
  }

  InsertColonia(){
    let params = {
      nombre: this.NombreColonia,
      codigoPostal: this.CodigoPostal
    }
    this.api.PostMethod(params, 'Colonia/InsertColonia').subscribe(x=>{
      if(x.error){
        this.alert.error('Error','Intente de nuevo más tarde')
      }else{
        this.alert.success('OK', 'Colonia ingresada correctamente')
        this.NombreColonia = '';
        this.CodigoPostal = '';
        this.GetColonias();
      }
    })
  }

  GetColonias(){
    this.api.GetMethod('Colonia/GetColonias').subscribe(x=>{
      if(x.error){
        this.alert.error('Error', 'Ocurrio un error al recuperar las colonias, intente de nuevo mas tarde')
      }else{
        this.Colonias = x.data;
      }
    })
  }

  AsignarTarea(product){
    let params = {
      CuadrillaID: parseInt(localStorage.getItem("cuadrilla")),
      TareaID: parseInt(product.tareaID)
    }
    this.api.PostMethod(params, 'Tarea/AsignarTareasCuadrilla').subscribe(x=>{
      if(!x.error){
        this.alert.success('OK', 'Se asigno la tarea a la cuadrilla');
      }else{
        this.alert.error('Error', 'No se pudo asignar la tarea a la cuadrilla');
      }
      this.GetTareas();
    });
  }

}
