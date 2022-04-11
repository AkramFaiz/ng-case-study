import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-home',
  templateUrl: './count-home.component.html',
  styleUrls: ['./count-home.component.scss']
})
export class CountHomeComponent implements OnInit {
  sval: number = 0;
  pval: number = 0;
  type: string[] = [];
  pLogs: string[] = [];
  timerVal: number = 0;
  enteredVal: number = 0;
  inteerval: any;
  logs: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  startPress(eve: any) {
    let theTime = new Date().toISOString().split('T')[0].split("-").reverse().join("-") + " "
      + new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    const res = JSON.parse(eve);
    this.enteredVal = parseInt(res.timerValue);
    if(this.timerVal == 0){
      this.timerVal = this.enteredVal;
    }
    if (res.start) {
      if(this.timerVal == 0){
        this.resetPress("{reset: true}");
      }
      this.sval++;
      this.inteerval = setInterval(() => {
        this.timerVal--;
        if(!this.timerVal){
          clearInterval(this.inteerval);
        }
      }, 1000)
      this.type.push("Started at " + theTime);
    } else {
      this.pval++;
      clearInterval(this.inteerval);
      this.logs.push("Paused at "+ this.timerVal);
      this.pLogs = this.logs;
      this.type.push("Paused at " + theTime);
    }
  }
  resetPress(eve: any) {
    console.log(eve);
    if (JSON.parse(eve).reset) {
      this.sval = 0;
      this.pval = 0;
      this.type = [];
      this.timerVal = 0;
      clearInterval(this.inteerval);
    }
  }
}
