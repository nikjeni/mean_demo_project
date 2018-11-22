import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home', loadChildren: './home/home.module#HomeModule'
    }
]
