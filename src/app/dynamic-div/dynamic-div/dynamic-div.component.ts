import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicDivComponent implements OnInit {
  items: any = [];
  constructor() { }

  ngOnInit(): void {
    for( let p=0; p< 10000; p++){
      this.items.push(p);
    }
  }

  clicked(eve: any): void {
    alert(eve.target.innerHTML+ " pressed.");
  }
}
