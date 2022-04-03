import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-count-actions',
  templateUrl: './count-actions.component.html',
  styleUrls: ['./count-actions.component.scss']
})
export class CountActionsComponent implements OnInit {
  @ViewChild('textInput') textInput!: ElementRef;
  @Output() startClick = new EventEmitter();
  @Output() resetClick = new EventEmitter();

  private _plogs: string[] = [];

  @Input()
  set plogs(val: string[]) {
    console.log(val);
    this._plogs = val;
  }

  get plogs() {
    return this._plogs;
  }

  counter: any = -1;
  bStart: boolean = false;
  bPause: boolean = false;
  startObj = {};
  showError = false;
  constructor() { }

  ngOnInit(): void {
  }
  clicked(val: string) {
    if (val === "start") {
      if (this.textInput.nativeElement.value !== "" && !isNaN(this.textInput.nativeElement.value)) {
        if (this.counter == -1) {
          this.counter = 1;
          this.bStart = true;
          this.bPause = false
        } else {
          this.bPause = true;
          this.bStart = false;
          this.counter = -1;
        }
        this.startObj = {
          start: this.bStart,
          pause: this.bPause,
          timerValue: this.textInput.nativeElement.value
        }
        this.startClick.emit(JSON.stringify(this.startObj));
        this.showError = false;
      } else {
        this.showError = true;
      }
    }
    else {
      this.bPause = false;
      this.bStart = false;
      this.counter = -1;
      this.showError = false;
      this.textInput.nativeElement.value = "";
      this.resetClick.emit(JSON.stringify({ reset: true }));
      this.plogs = [];
    }
  }
}
