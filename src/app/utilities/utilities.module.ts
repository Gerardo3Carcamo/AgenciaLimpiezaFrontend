import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';


@NgModule({
  declarations: [NavigationMenuComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[NavigationMenuComponent]
})
export class UtilitiesModule { }
