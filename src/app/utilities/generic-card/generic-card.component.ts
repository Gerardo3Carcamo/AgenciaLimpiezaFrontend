import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent {

  protected homeworks:any;
  @Input() set Homeworks(homeworkData:any){
    this.homeworks = homeworkData;
  }
  protected button:boolean = true;
  @Input() set showButton(ShowButton:boolean){
    this.button = ShowButton;
  }

  @Output() finishHomework = new EventEmitter<any>();
  @Output() viewImage = new EventEmitter<any>();

  emitTareaID(homework){
    this.viewImage.emit(homework.tareaID)
  }

  markAsFinished(homework: any, event: any) {
    let files = event.files;
    if (files && files.length > 0) {
      let file = files[0];
      let data = {
        tareaID: homework.tareaID,
        file: file
      };
      this.finishHomework.emit(data);
    }else{
      this.finishHomework.emit(homework.tareaID)
    }
  }
  
}
