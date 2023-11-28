import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ViewImageComponent } from './Modales/view-image/view-image.component';

@Component({
  selector: 'app-finish-homework',
  templateUrl: './finish-homework.component.html',
  styleUrls: ['./finish-homework.component.scss'],
  providers: [DialogService]
})
export class FinishHomeworkComponent implements OnInit{

  constructor(public dialogService: DialogService, public api: ApiService, public alert: AlertService){}

  ref: DynamicDialogRef = new DynamicDialogRef;
  imageUrl:any;
  cuadrilla:any;
  homeworks:any;
  ngOnInit(): void {
    this.cuadrilla = localStorage.getItem("cuadrilla");
    this.GetSpecificHomeworks()
  }

  GetSpecificHomeworks(){
    console.log(this.cuadrilla)
    this.api.PostMethod({CuadrillaID: this.cuadrilla}, 'Tarea/GetSpecificHomeworks').subscribe(x=>{
      this.homeworks = x.data;
      console.log(x.data)
    })
  }

  UpdateAssignedHomework(event){
    console.log(event)
    let params = {
      TareaID: event.tareaID
    }
    this.api.PostMethod(params, 'Tarea/MarkAsSolvedHomework').subscribe(x=>{
      if(!x.error){
        //this.alert.success('OK','Se ha terminado la tarea correctamente')
        if(event.file){
          const formData = new FormData();
          formData.append('file', event.file)
          formData.append('tareaID', event.tareaID.toString());
          this.api.PostMethod(formData, 'Tarea/InsertImage').subscribe(x=>{
            x.error ? this.alert.error('Ups...', 'Ocurrio un error inesperado, no se pudo guardar la imagen') : this.alert.success('Ok', 'Imagen guardada correctamente')
            if(!x.error){
              this
            }
            this.GetSpecificHomeworks();
          })
        }
      }else{
        this.alert.error('Error', 'No se pudo finalizar la tarea, intente de nuevo');
      }
    })
  }

  prueba(event){
    console.log(event)
    this.imageUrl = `https://localhost:7101/api/Tarea/GetImage/${parseInt(event)}`;
    this.ref = this.dialogService.open(ViewImageComponent, {
      header: 'Imagen',
      width: '50%',
      height: '1200px',
      contentStyle: {"overflow": "hidden"},
      baseZIndex: 10000,
      maximizable: true,
      data: this.imageUrl
    });
  }

}
