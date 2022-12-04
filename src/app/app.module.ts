import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { HabilidaddesComponent } from './componentes/habilidaddes/habilidaddes.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { IndexComponent } from './componentes/index/index.component';
import { RegisterComponent } from './componentes/register/register.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { PaginaloginComponent } from './componentes/paginalogin/paginalogin.component';
import { LoginComponent } from './componentes/login/login.component';
import { LogoutComponent } from './componentes/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    PresentacionComponent,
    EducacionComponent,
    CursosComponent,
    HabilidaddesComponent,
    ProyectosComponent,
    FooterComponent,
    IndexComponent,
    RegisterComponent,
    DashboardComponent,
    PaginaloginComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
