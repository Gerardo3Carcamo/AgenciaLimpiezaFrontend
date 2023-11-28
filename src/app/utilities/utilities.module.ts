import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { GenericCardComponent } from './generic-card/generic-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [NavigationMenuComponent, GenericCardComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CardModule,
    ButtonModule,
    DividerModule,
    TooltipModule,
    FileUploadModule
  ],
  exports:[NavigationMenuComponent, GenericCardComponent]
})
export class UtilitiesModule { }
