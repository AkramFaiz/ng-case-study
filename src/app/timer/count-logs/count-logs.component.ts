import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-logs',
  templateUrl: './count-logs.component.html',
  styleUrls: ['./count-logs.component.scss']
})
export class CountLogsComponent implements OnInit {

  private _pval: number = 0;
  private _sval: number = 0;

  logs = [];

  @Input()
  set p_val(val: number) {
    this._pval = val;
  }

  get p_val() {
    return this._pval;
  }

  @Input()
  set s_val(val: number) {
    this._sval = val;
  }

  get s_val() {
    return this._sval;
  }
  constructor() { }

  ngOnInit(): void {

  }

}
