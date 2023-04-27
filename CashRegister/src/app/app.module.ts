import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { RegistersComponent } from './Components/registers/registers.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RegistersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
