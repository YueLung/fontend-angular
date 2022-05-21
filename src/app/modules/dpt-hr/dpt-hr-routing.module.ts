import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { Page001Component } from './page001/page001.component';

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: '001', pathMatch: 'full' },
    { path: '001', component: Page001Component }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DptHrRoutingModule { }
