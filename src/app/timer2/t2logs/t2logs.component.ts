import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Timer2Service } from '../timer2.service';

@Component({
  selector: 'app-t2logs',
  templateUrl: './t2logs.component.html',
  styleUrls: ['./t2logs.component.scss']
})
export class T2logsComponent implements OnInit, OnDestroy {
  p_val: number = 0;
  s_val: number = 0;
  subs!: Subscription;
  constructor(private tService: Timer2Service) { }

  ngOnInit(): void {
    this.subs = this.tService.getData().subscribe((data) => {
      this.p_val = data.pVal;
      this.s_val = data.sVal;
    })
  }
  ngOnDestroy(): void{
    this.subs.unsubscribe();
  }
}
