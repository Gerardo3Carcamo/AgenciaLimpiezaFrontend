import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGear, faHome, faChartSimple, faRightFromBracket, faFolderOpen, faBook, faHouseUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit{

  constructor(public router: Router){}

  user:any;

  ngOnInit(): void {
    this.user = localStorage.getItem('session');
  }
  
  protected _items: any = [
    {url: 'home', icon: faHome, iconColor: 'blue', description: 'Inicio', user: 2},
    {url: 'dashboard', icon: faChartSimple, iconColor: 'pink', description: 'Dashboard',user: 1},
    {url: 'finish-homework', icon: faBook, iconColor: 'blue', description: 'Terminar tarea', user: 1},
    {url: 'catalogos', icon: faFolderOpen, iconColor: 'yellow', description: 'Catalogos', user: 1},
    {url: 'admin-usuarios', icon: faGear, iconColor: 'gray', description: 'Administración', user: 1},
    {url: 'employee', icon: faHouseUser, iconColor: 'blue', description: 'Empleados', user: 3},
    {url: 'log-out', icon: faRightFromBracket, iconColor: 'red', description: 'Cerrar sesion', user: 1, custom: 3},
  ];

  redirect($myParam: string = ''): void {
    if($myParam === 'log-out'){
      console.log('cerrando')
      localStorage.removeItem("session");
      localStorage.removeItem("userID")
      localStorage.setItem("session", 'undefined')
      localStorage.setItem("cuadrilla", 'undefined')
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
