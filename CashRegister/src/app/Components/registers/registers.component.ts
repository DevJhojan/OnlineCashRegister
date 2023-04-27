import { Component, Input } from '@angular/core';
import { Product } from '../Models/product.model';

@Component({
  selector: 'registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent {

  total: number;
  @Input() products: Product[];

  constructor(){
    this.products = [];
    this.total = 0;
  }

  calculateTotal():number{
    this.total = 0;
    for(let product of this.products){
      this.total += product.price*product.amount;
    }
    return this.total;
  }
}
