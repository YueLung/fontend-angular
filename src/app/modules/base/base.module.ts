import { NgModule } from '@angular/core';
import { BaseRoutingModule } from './base-routing.module';
import { MaterialBaseModule } from './../../shared/material-base.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { DashboardPage } from './dashboard/dashboard.page';
import { ShareModule } from 'src/app/shared/share.module';
import { Dashboard2Page } from './dashboard2/dashboard2.page';
import { NgChartsModule } from 'ng2-charts';
import { MlbService } from './apis/mlb.service';
import { MaterialItemComponent } from './dashboard2/components/material-item.component';



@NgModule({
  declarations: [
    DashboardPage,
    Dashboard2Page,
    MaterialItemComponent
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
