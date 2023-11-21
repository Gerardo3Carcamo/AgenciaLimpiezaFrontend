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

  markAsFinished(homework: any) {
    this.finishHomework.emit(homework.tareaID);
  }
  
}
