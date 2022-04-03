import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-clicks',
  templateUrl: './count-clicks.component.html',
  styleUrls: ['./count-clicks.component.scss']
})
export class CountClicksComponent implements OnInit {
  private _type_val: string[] = [];

  @Input()
  set type_val(val: string[]) {
    this._type_val = val;
  }

  get type_val() {
    return this._type_val;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
