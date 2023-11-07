import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(title:string, message:string){
    return Swal.fire({
      icon: 'success',
      title: title,
      text: message
    });
  }

  error(title:string, message:string){
    return Swal.fire({
      icon: 'error',
      title: title,
      text: message
    });
  }

}
