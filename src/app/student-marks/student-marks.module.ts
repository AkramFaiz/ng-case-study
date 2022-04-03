import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMarksComponent } from './s-marks/s-marks.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
const routes: Routes = [{
  path: '', component: SMarksComponent
}]

@NgModule({
  declarations: [
    SMarksComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentMarksModule { }
