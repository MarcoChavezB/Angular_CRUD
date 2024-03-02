

export const routes: Routes = [ 
  {
    /*
    Cambiar esto si no tiene el token 
    */
    path: '',
    component: AuthComponent,  
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'registrar',
        component: RegisterComponent
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

import { Routes } from '@angular/router';
import { AuthComponent } from './Layouts/auth/auth.component';
import { LoginComponent } from './Views/Auth/login/login.component';
import { RegisterComponent } from './Views/Auth/register/register.component';
import { DashboardComponent } from './Layouts/dashboard/dashboard.component';
import { IndexComponent } from './Views/User/index/index.component';
