import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Logs } from '../core/logs';
import { Timer1 } from '../core/timer';

@Injectable({
  providedIn: 'root'
})
export class Timer2Service {
  initialval: Timer1 = {
    sVal: 0,
    timerval: 0,
    pVal: 0,
    bstart: false,
    bPause: false,
    bReset: false
  };

  initialLogs: Logs = {
    logs: [],
    plogs: [],
  }
  private sub = new BehaviorSubject<Timer1>(this.initialval);
  tSub = this.sub.asObservable();
  private subLogs = new BehaviorSubject<Logs>(this.initialLogs);
  tSubLogs = this.subLogs.asObservable();
  constructor() { }

  getData(){
    return this.tSub;
  }
  setData(val: any){
    this.sub.next(val);
  }

  getLogs(){
    return this.tSubLogs;
  }
  setLogs(val: any){
    this.subLogs.next(val);
  }
}
