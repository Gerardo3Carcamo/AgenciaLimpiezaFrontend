import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-crear-cuadrilla',
  templateUrl: './crear-cuadrilla.component.html',
  styleUrls: ['./crear-cuadrilla.component.scss']
})
export class CrearCuadrillaComponent implements OnInit{

  constructor(public api: ApiService, public alert: AlertService, public ref: DynamicDialogRef){}

  Nombre:any;
  
  ngOnInit(): void {
      
  }

  crearCuadrilla(){
    let params = {
      CuadrillaName: this.Nombre,
      UserID: parseInt(localStorage.getItem("userID"))
    };
    this.api.PostMethod(params, 'Cuadrilla/InsertCuadrilla').subscribe(x=>{
      if(x.error){
        this.alert.error('Error', 'Ocurrio un error inesperado, intente de nuevo mas tarde.')
      }else{
        this.alert.success('Exito', 'Se ha registrado la cuadrilla exitosamente.');
        this.ref.close()
      }
    });
  }

}
