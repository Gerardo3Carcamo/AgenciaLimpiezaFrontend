import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AdministracionUsuariosComponent } from './components/administracion-usuarios/administracion-usuarios.component';
import { TableModule } from 'primeng/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UtilitiesModule } from './utilities/utilities.module';
import { HomeComponent } from './components/home/home.component';
import { AsignarModulosComponent } from './components/asignar-modulos/asignar-modulos.component';
import { DropdownModule } from 'primeng/dropdown';
import { CatalogosComponent } from './components/catalogos/catalogos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { SpeedDialModule } from 'primeng/speeddial';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CrearCuadrillaComponent } from './components/administracion-usuarios/modales/crear-cuadrilla/crear-cuadrilla.component';
import { AgregarAMiCuadrillaComponent } from './components/administracion-usuarios/modales/agregar-a-mi-cuadrilla/agregar-a-mi-cuadrilla.component';
import { FinishHomeworkComponent } from './components/finish-homework/finish-homework.component';
import { ChartModule } from 'primeng/chart';
import { EmployeesComponent } from './components/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    LoginComponent,
    AdministracionUsuariosComponent,
    HomeComponent,
    AsignarModulosComponent,
    CatalogosComponent,
    DashboardComponent,
    CrearCuadrillaComponent,
    AgregarAMiCuadrillaComponent,
    FinishHomeworkComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    PasswordModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule,
    HttpClientModule,
    TableModule,
    FontAwesomeModule,
    UtilitiesModule,
    DropdownModule,
    CardModule,
    SpeedDialModule,
    TabViewModule,
    InputTextareaModule,
    TooltipModule,
    ChartModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
