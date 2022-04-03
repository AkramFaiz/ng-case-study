import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Timer2Service } from '../timer2.service';

@Component({
  selector: 'app-t2clicks',
  templateUrl: './t2clicks.component.html',
  styleUrls: ['./t2clicks.component.scss']
})
export class T2clicksComponent implements OnInit, OnDestroy {
  type_val: string[] = [];
  subs!: Subscription;
  constructor(private tService: Timer2Service) { }

  ngOnInit(): void {
    this.subs = this.tService.getLogs().subscribe((data)=> {
      this.type_val = data.logs;      
    });
  }

  ngOnDestroy(): void{
    this.subs.unsubscribe();
  }

}
