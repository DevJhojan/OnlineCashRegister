import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../Models/product.model';
@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  @Output() addedProduct: EventEmitter<Product>;

  @Input() title: string;
  @Input() products: Product[];

  constructor(){
    this.title = '';
    this.products = [];
    this.addedProduct = new EventEmitter();
  }

  onClick(product: Product){
    this.addedProduct.emit(product);
  }

}
