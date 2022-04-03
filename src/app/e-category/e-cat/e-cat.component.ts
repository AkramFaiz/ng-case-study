import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/core/items';

@Component({
  selector: 'app-e-cat',
  templateUrl: './e-cat.component.html',
  styleUrls: ['./e-cat.component.scss']
})
export class ECatComponent implements OnInit {
  type: string = 'row wrap';
  styling: string = '0 1 calc(25% - 30px)';
  constructor() { }
  products: Items[] = [];
  filteredProducts: Items[] = [];
  ngOnInit(): void {
    this.products = [
      { pname: 'On Cloud Nine Pillow', pdesc: 'Sociosqu facilisis duis ...', pcost: 298, pstock: "available"},
      { pname: 'On Cloud One Pillow', pdesc: 'Sociosqu facilisis duis ...', pcost: 1298, pstock: "available"},
      { pname: 'On Cloud Two Pillow', pdesc: 'Sociosqu facilisis duis ...', pcost: 2298, pstock: "available"},
      { pname: 'On Cloud Three Pillow', pdesc: 'Sociosqu facilisis duis ...', pcost: 3298, pstock: "available"},
      { pname: 'On Cloud Four Pillow', pdesc: 'Sociosqu facilisis duis ...', pcost: 4298, pstock: "available"},
      { pname: 'On Cloud Five Pillow', pdesc: 'Sociosqu facilisis duis ...', pcost: 3398, pstock: "available"},
      { pname: 'On Sky Six Pillow', pdesc: 'Sociosqu facilisis duis ...', pcost: 999, pstock: "available"},
      { pname: 'On Cloud Seven Pillow', pdesc: 'Sociosqu facilisis duis ...', pcost: 2798, pstock: "available"},
      { pname: 'On Cloud Eight Pillow', pdesc: 'Sociosqu facilisis duis ...', pcost: 2698, pstock: "available"},
      { pname: 'On Cloud Zero Pillow', pdesc: 'Sociosqu facilisis duis ...', pcost: 2918, pstock: "available"},
      { pname: 'On Sky Pillow', pdesc: 'Sociosqu facilisis duis ...', pcost: 1198, pstock: "out of stock"}
    ];

    this.filteredProducts = JSON.parse(JSON.stringify(this.products));
  }

  selectOption(eve: any): void{
    console.log(eve.value);
    if(eve.value === 'list') {
      this.styling = "0 1 calc(50% - 30px)"
    }else {
      this.styling = "0 1 calc(25% - 30px)"
    }
  }

  filtering(eve: any): void{
    console.log(eve.value);
    if(eve.value === 'low') {
      this.filteredProducts = this.filteredProducts.sort(
        (low, high) => low.pcost - high.pcost
      );
    }else {
      this.filteredProducts = this.filteredProducts.sort(
        (low, high) => high.pcost - low.pcost
      );
    }
    console.log(this.filteredProducts)
  }

}
