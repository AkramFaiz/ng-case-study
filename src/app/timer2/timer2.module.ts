import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { T2clicksComponent } from './t2clicks/t2clicks.component';
import { T2logsComponent } from './t2logs/t2logs.component';
import { T2displayComponent } from './t2display/t2display.component';
import { T2actionsComponent } from './t2actions/t2actions.component';
import { T2homeComponent } from './t2home/t2home.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';

const routes : Routes = [{ path: '', component:T2homeComponent }];

@NgModule({
  declarations: [
    T2clicksComponent,
    T2logsComponent,
    T2displayComponent,
    T2actionsComponent,
    T2homeComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    RouterModule.forChild(routes)
  ]
})
export class Timer2Module { }
