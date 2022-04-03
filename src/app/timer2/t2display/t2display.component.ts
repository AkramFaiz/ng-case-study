import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Timer2Service } from '../timer2.service';

@Component({
  selector: 'app-t2display',
  templateUrl: './t2display.component.html',
  styleUrls: ['./t2display.component.scss']
})
export class T2displayComponent implements OnInit,OnDestroy {
  timer: any = 0;
  subs!: Subscription;
  constructor(private tService: Timer2Service) { }

  ngOnInit(): void {
    this.subs = this.tService.getData().subscribe((data)=>{
      this.timer = data.timerval;
    })
  }
  ngOnDestroy(): void{
    this.subs.unsubscribe();
  }
}
