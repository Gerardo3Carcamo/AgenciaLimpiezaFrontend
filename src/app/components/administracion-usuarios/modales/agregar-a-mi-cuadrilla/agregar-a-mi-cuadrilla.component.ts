import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-agregar-a-mi-cuadrilla',
  templateUrl: './agregar-a-mi-cuadrilla.component.html',
  styleUrls: ['./agregar-a-mi-cuadrilla.component.scss']
})
export class AgregarAMiCuadrillaComponent implements OnInit{

  constructor(public api: ApiService, public alert: AlertService, public ref: DynamicDialogRef){}

  users:any;
  userSelected:any;

  ngOnInit(): void {
    this.GetUsersWithOutCuadrilla();
  }

  GetUsersWithOutCuadrilla() {
    this.api.GetMethod('Usuario/GetUsersWithOutCuadrilla').subscribe(x=>{
      if(!x.error){
        this.users = x.data;
        console.log(this.users)
      }
    })
  }

  InsertUsuarioCuadrilla(){
    let params = {
      UserID: this.userSelected,
      CuadrillaID: parseInt(localStorage.getItem("cuadrilla"))
    }
    this.api.PostMethod(params, 'Cuadrilla/InsertUserIntoCuadrilla').subscribe(x=>{
      if(!x.error){
        this.alert.success('OK', 'Usuario ingresado correctamente a su cuadrilla.')
        this.ref.close();
      }
    });
  }

}
