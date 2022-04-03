import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { RouterModule, Routes } from '@angular/router';
import {ScrollingModule} from '@angular/cdk/scrolling';

const routes: Routes = [{
  path: '', component: DynamicDivComponent
}]

@NgModule({
  declarations: [
    DynamicDivComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    RouterModule.forChild(routes)
  ]
})
export class DynamicDivModule { }
