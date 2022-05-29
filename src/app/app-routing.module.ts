
import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlMatchResult, UrlSegment } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { LocalStorage } from './core/utils/local-storage';

function dynamicPathAccount(judge: string): (segments: UrlSegment[]) => UrlMatchResult | null {
  return (segments: UrlSegment[]): UrlMatchResult | null => {
    if (segments.length === 0 || (segments.length === 1 && segments[0].path === 'base')) {
      if (LocalStorage.getUserName()?.includes(judge)) {
        return { consumed: segments, posParams: {} };
      }
    }
    return null;
  }
}

const routes: Routes = [
  { matcher: dynamicPathAccount('TT'), redirectTo: 'hr' },
  { path: '', redirectTo: 'base', pathMatch: 'full' },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'base',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/base/base.module').then(m => m.BaseModule)
  },
  {
    path: 'hr',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/dpt-hr/dpt-hr.module').then(m => m.DptHrModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
