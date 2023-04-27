import { Component } from '@angular/core';
import { Product } from './Components/Models/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  productSelect: Product[];
  groceries: Product[];
  drinks: Product[];

  constructor() {
    this.productSelect = [];
    this.groceries = [
      new Product('https://www.comedera.com/wp-content/uploads/2022/11/papas-fritas-con-queso-cheddar-PG_PFCQCY30320002.jpg',
      'Papas', 'Papitas fritas con salchichas', 2.5),
      new Product('https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/640px-NCI_Visuals_Food_Hamburger.jpg',
      'Hamburguesa', 'Elaborado a partir de carne cortada en cubos molida, condimentos y aditivos alimentarios.', 3.0),
    ];
    this.drinks = [
      new Product('https://cdn.shopify.com/s/files/1/0492/2458/1274/products/supermercados_la_vaquita_supervaquita_gaseosa_coca_cola_3l_nr_bebidas_liquidas_3df7d9f6-ab5c-4638-8cf3-2bb50b76491e_1024x1024.jpg?v=1620489381',
      'Coca-cola', 'es una bebida azucarada gaseosa ', 1.5),
      new Product('https://www.cocina-cubana.com/base/stock/Recipe/181-image/181-image_web.jpg',
      'Jugo', 'Se le considera antioxidante y combate la anemia. Fuente de vitamina E con bajo aporte calórico', 0.5)
    ]
  }

  onPorductSelect($event: any){
    const productFind = this.productSelect.find(product => product.name===$event.name);
    if(productFind){
      productFind.amount++;
    }
    else{
      $event.amount=1; 
      this.productSelect.push($event);
    }
  }

}
