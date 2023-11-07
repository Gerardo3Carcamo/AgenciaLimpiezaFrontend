import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit{

  constructor(public api: ApiService, public alert: AlertService, public ref: DynamicDialogRef){}

  Name:any;
  Email:any;
  Date:any;
  Password:any;
  Phone:any;

  ngOnInit(): void {
    
  }

  CreateUser(){
    let params = {
      Name: this.Name,
      Email: this.Email,
      Phone: this.Phone,
      Password: this.Password
    }
    this.api.PostMethod(params, 'Usuario/InsertUser').subscribe(x=> {
      if(x.error){
        this.alert.error('Sucedio un error inesperado.', 'Intente de nuevo mas tarde.')
      }else{
        this.alert.success('Registrado con exito!', 'Ahora puedes ingresar a la plataforma.')
      }
      this.ref.close();
    })
  }

}
