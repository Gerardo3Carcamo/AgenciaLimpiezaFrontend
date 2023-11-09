import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faGear, faHome, faChartSimple, faXmark, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {

  constructor(public router: Router){}
  
  protected _items: any = [
    {url: 'home', icon: faHome, iconColor: 'blue', description: 'Inicio'},
    {url: 'dashboard', icon: faChartSimple, iconColor: 'pink', description: 'Dashboard'},
    {url: 'admin-usuarios', icon: faGear, iconColor: 'gray', description: 'Administración de usuarios'},
    {url: 'log-out', icon: faRightFromBracket, iconColor: 'red', description: 'Cerrar sesion'},
  ];

  redirect($myParam: string = ''): void {
    if($myParam === 'log-out'){
      console.log('cerrando')
      localStorage.removeItem("session");
      localStorage.setItem("session", 'undefined')
      const navigationDetails: string[] = ['/'];
      console.log('cerrado')
      this.router.navigate(navigationDetails);
      console.log('navegandoS')
    }else{
      const navigationDetails: string[] = ['/' + $myParam];
      this.router.navigate(navigationDetails);
    }
  }

}
