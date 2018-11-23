import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { UserComponent } from 'app/user/user.component';
import { TableComponent } from 'app/table/table.component';
import { TypographyComponent } from 'app/typography/typography.component';
import { IconsComponent } from 'app/icons/icons.component';
import { MapsComponent } from 'app/maps/maps.component';
import { NotificationsComponent } from 'app/notifications/notifications.component';
import { UpgradeComponent } from 'app/upgrade/upgrade.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'typography',
        component: TypographyComponent
      },
      {
        path: 'icons',
        component: IconsComponent
      },
      {
        path: 'maps',
        component: MapsComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'upgrade',
        component: UpgradeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
