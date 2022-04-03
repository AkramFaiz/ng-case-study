import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECatComponent } from './e-cat/e-cat.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const routes: Routes = [{
  path: '', component: ECatComponent
}]


@NgModule({
  declarations: [
    ECatComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    RouterModule.forChild(routes)
  ]
})
export class ECategoryModule { }
