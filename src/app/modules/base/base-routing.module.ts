import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { DashboardPage } from './dashboard/dashboard.page';
import { Dashboard2Page } from './dashboard2/dashboard2.page';

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardPage },
    { path: 'dashboard2', component: Dashboard2Page }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
