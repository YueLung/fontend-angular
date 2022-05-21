import { NgModule } from '@angular/core';
import { DptHrRoutingModule } from './dpt-hr-routing.module';
import { ShareModule } from 'src/app/shared/share.module';
import { MaterialBaseModule } from 'src/app/shared/material-base.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { Page001Component } from './page001/page001.component';




@NgModule({
  declarations: [
    Page001Component
  ],
  imports: [
    DptHrRoutingModule,
    MaterialBaseModule,
    ShareModule,
    LayoutModule
  ]
})
export class DptHrModule { }
