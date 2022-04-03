import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-count-display',
  templateUrl: './count-display.component.html',
  styleUrls: ['./count-display.component.scss']
})
export class CountDisplayComponent implements OnInit {
  private _timer_val: number = 0;
  @Input() set timer_val(val: number) {
    this._timer_val = val;
  };
  get timer_val(){
    return this._timer_val;
  }

  private _reset_val: boolean = false;
  @Input()
  set reset_val(val: boolean) {
    if(val){
      this.timer_val = 0;
    }
  }
  get reset_val() {
    return this._reset_val;
  }

  constructor() {
  }

  ngOnInit() {}

}
