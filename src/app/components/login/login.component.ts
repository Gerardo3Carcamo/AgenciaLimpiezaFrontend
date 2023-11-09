import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { RegistroUsuarioComponent } from '../registro-usuario/registro-usuario.component';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [DialogService]
})
export class LoginComponent implements OnInit{

  constructor(public router: Router, public dialogService: DialogService, public api: ApiService, public alert: AlertService){}

  correo:any;
  password:any;
  ref: DynamicDialogRef = new DynamicDialogRef;

  ngOnInit(): void {
    console.log(localStorage.getItem("session"))
    if(localStorage.getItem("session") !== 'undefined'){
      this.redirect('home')
    }else{
      this.redirect('login')
    }
  }

  redirect($myParam: string = ''): void {
    const navigationDetails: string[] = ['/' + $myParam];
    this.router.navigate(navigationDetails);
  }

  doLogin(){
    let params = {
      Email: this.correo,
      Password: this.password
    }
    this.api.PostMethod(params, 'Usuario/Login').subscribe(x=>{
      if(x.data == 'DONE'){
        localStorage.setItem("session", x.session.toString())
        this.redirect('home')
      }else{
        this.alert.error('Credenciales incorrectas, verifiquelas de nuevo', '');
      }
    })
  }

  openSignUp(){
    this.ref =  this.dialogService.open(RegistroUsuarioComponent, {
      header: 'Registrarse como usuario nuevo',
      width: '70%',
      contentStyle: {"overflow": "hidden"},
      baseZIndex: 10000,
      maximizable: true
    });
    this.ref.onClose.subscribe(res => {

    })
  }
  
}
