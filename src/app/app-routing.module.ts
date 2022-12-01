import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { IndexComponent } from './componentes/index/index.component';
import { PaginaloginComponent } from './componentes/paginalogin/paginalogin.component';
import { RegisterComponent } from './componentes/register/register.component';

const routes: Routes = [
  {path: '', component: IndexComponent },
  {path: 'paginalogin', component: PaginaloginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'dashboard', component: DashboardComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
