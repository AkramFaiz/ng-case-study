import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingComponent } from './floating/floating.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', component: FloatingComponent
}]

@NgModule({
  declarations: [
    FloatingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FloatBannerModule { }
