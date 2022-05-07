import { NgModule } from '@angular/core';
import { BaseRoutingModule } from './base-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShareModule } from 'src/app/shared/share.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    ShareModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
