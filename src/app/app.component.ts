import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPumpSoap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(public router: Router){}

  title = 'Sistema gestion de limpieza';

  icon = faPumpSoap;
  correo:any;
  password:any;

  ngOnInit(): void {
      this.redirect('login')
  }

  redirect($myParam: string = ''): void {
    const navigationDetails: string[] = ['/' + $myParam];
    this.router.navigate(navigationDetails);
  }

}
