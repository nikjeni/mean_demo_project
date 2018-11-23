import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarModule } from 'app/sidebar/sidebar.module';
import { NavbarModule } from 'app/shared/navbar/navbar.module';
import { FooterModule } from 'app/shared/footer/footer.module';
import { FixedPluginModule } from 'app/shared/fixedplugin/fixedplugin.module';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { UserComponent } from 'app/user/user.component';
import { TableComponent } from 'app/table/table.component';
import { TypographyComponent } from 'app/typography/typography.component';
import { IconsComponent } from 'app/icons/icons.component';
import { MapsComponent } from 'app/maps/maps.component';
import { NotificationsComponent } from 'app/notifications/notifications.component';
import { UpgradeComponent } from 'app/upgrade/upgrade.component';
import { NguiMapModule } from '@ngui/map';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    HomeRoutingModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE' })
  ]
})
export class HomeModule { }
