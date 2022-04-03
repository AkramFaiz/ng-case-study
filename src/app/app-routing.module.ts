import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'float', loadChildren: () => import('./float-banner/float-banner.module').then(m => m.FloatBannerModule) },
{ path: 'eCat', loadChildren: () => import('./e-category/e-category.module').then(m => m.ECategoryModule) },
{ path: 'timer', loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule) },
{ path: 'timer2', loadChildren: () => import('./timer2/timer2.module').then(m => m.Timer2Module) },
{ path: 'dyDiv', loadChildren: () => import('./dynamic-div/dynamic-div.module').then(m => m.DynamicDivModule) },
{ path: 'sMarks', loadChildren: () => import('./student-marks/student-marks.module').then(m => m.StudentMarksModule) },
{ path: '', redirectTo: 'float', pathMatch: 'full' },
{ path: '**', redirectTo: 'float' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
