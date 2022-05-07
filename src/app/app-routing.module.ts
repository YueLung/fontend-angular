import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'base', pathMatch: 'full' },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'base',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/base/base.module').then(m => m.BaseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
