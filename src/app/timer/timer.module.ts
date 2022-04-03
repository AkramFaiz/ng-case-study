import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountActionsComponent } from './count-actions/count-actions.component';
import { CountLogsComponent } from './count-logs/count-logs.component';
import { CountClicksComponent } from './count-clicks/count-clicks.component';
import { CountDisplayComponent } from './count-display/count-display.component';
import { RouterModule, Routes } from '@angular/router';
import { CountHomeComponent } from './count-home/count-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes : Routes = [{ path: '', component:CountHomeComponent }];

@NgModule({
  declarations: [
    CountActionsComponent,
    CountLogsComponent,
    CountClicksComponent,
    CountDisplayComponent,
    CountHomeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    // CountActionsComponent,
    // CountLogsComponent,
    // CountClicksComponent,
    // CountDisplayComponent
  ]
})
export class TimerModule { }
