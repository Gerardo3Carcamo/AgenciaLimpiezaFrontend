import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { AdministracionUsuariosComponent } from './components/administracion-usuarios/administracion-usuarios.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { CatalogosComponent } from './components/catalogos/catalogos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: AppComponent },
  {path: 'login', component: LoginComponent},
  {path: 'registrar-usuarios', component: RegistroUsuarioComponent},
  {path: 'admin-usuarios', component: AdministracionUsuariosComponent},
  {path: 'home', component: HomeComponent},
  {path: 'catalogos', component: CatalogosComponent},
  {path: 'dashboard', component: DashboardComponent},

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
