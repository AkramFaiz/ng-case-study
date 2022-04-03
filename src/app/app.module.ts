import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicDivModule } from './dynamic-div/dynamic-div.module';
import { ECategoryModule } from './e-category/e-category.module';
import { FloatBannerModule } from './float-banner/float-banner.module';
import { StudentMarksModule } from './student-marks/student-marks.module';
import {MatChipsModule} from '@angular/material/chips';
import { TimerModule } from './timer/timer.module';
import { Timer2Module } from './timer2/timer2.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    // TimerModule,
    AppRoutingModule,
    DynamicDivModule,
    ECategoryModule,
    FloatBannerModule,
    StudentMarksModule,
    MatChipsModule,
    // Timer2Module,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
