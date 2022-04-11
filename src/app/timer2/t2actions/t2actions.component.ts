import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Timer2Service } from '../timer2.service';

@Component({
  selector: 'app-t2actions',
  templateUrl: './t2actions.component.html',
  styleUrls: ['./t2actions.component.scss']
})
export class T2actionsComponent implements OnInit, OnDestroy {
  @ViewChild('textInput') textInput!: ElementRef;
  pausedLogs: string[] = [];
  showError = false;
  counter: any = -1;
  timerVal: number = 0;
  tCount = 0;
  interval: any;
  sub1!: Subscription;
  sub2!: Subscription;
  constructor(private tService: Timer2Service) { }

  ngOnInit(): void {
  }

  clicked(val: string) {
    let temp: any = {}, tempLogs: any = {};
    this.sub1 = this.tService.getData().subscribe((data) => {
      temp = data;
    });
    this.sub2 = this.tService.getLogs().subscribe((data) => {
      tempLogs = data;
    });
    let theTime = new Date().toISOString().split('T')[0].split("-").reverse().join("-") + " "
      + new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    
    if (this.timerVal == 0 && !temp.bStart && !temp.bPause) {
      this.timerVal = JSON.parse(JSON.stringify(this.textInput.nativeElement.value));
    }
    if (val === "start") {
      if (this.textInput.nativeElement.value !== "" && !isNaN(this.textInput.nativeElement.value)) {
        temp.bReset = false;
        if (this.counter == -1) {
          this.counter = 1;
          temp.bStart = true;
          temp.bPause = false;
          temp.sVal++;
          this.interval = setInterval(() => {
            temp.timerval = this.timerVal;
            this.tService.setData(temp);
            if (!this.timerVal) {
              clearInterval(this.interval);
            }
            this.timerVal--;
          }, 1000)
          tempLogs.logs.push("Started at " + theTime);
        } else {
          temp.bPause = true;
          temp.bStart = false;
          this.counter = -1;
          temp.pVal++;
          clearInterval(this.interval);
          tempLogs.logs.push("Paused at " + theTime);
          console.log(this.timerVal);
          let pVal = this.timerVal + 1;
          this.pausedLogs.push("Paused at " + pVal);          
        }
        this.showError = false;
      } else {
        this.showError = true;
      }
    } else {
      temp.bReset = true;
      temp.bPause = false;
      temp.bStart = false;
      this.counter = -1;
      this.textInput.nativeElement.value = "";
      temp.timerval = 0;
      this.timerVal = 0;
      this.showError = false;
      temp.pVal = 0;
      temp.sVal = 0;
      tempLogs.logs = [];
      this.pausedLogs = [];
      clearInterval(this.interval);
    }
    this.tService.setData(temp);
    this.tService.setLogs(tempLogs);
  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}
