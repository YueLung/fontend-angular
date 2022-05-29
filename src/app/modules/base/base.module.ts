import { NgModule } from '@angular/core';
import { BaseRoutingModule } from './base-routing.module';
import { MaterialBaseModule } from './../../shared/material-base.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShareModule } from 'src/app/shared/share.module';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { NgChartsModule } from 'ng2-charts';
import { MlbService } from './apis/mlb.service';



@NgModule({
  declarations: [
    DashboardComponent,
    Dashboard2Component
  ],
  imports: [
    BaseRoutingModule,
    MaterialBaseModule,
    ShareModule,
    LayoutModule,
    NgChartsModule
  ],
  providers: [MlbService]
})
export class BaseModule { }
