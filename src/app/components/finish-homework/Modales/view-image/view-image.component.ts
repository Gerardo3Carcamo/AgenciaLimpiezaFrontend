import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.scss']
})
export class ViewImageComponent implements OnInit{

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig){}

  src:any;

  ngOnInit(): void {
    this.src = this.config.data;
  }

}
