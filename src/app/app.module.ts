import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from "./app.component";
import { ProductComponent} from "./components/product/product/product.component";
import { OrderComponent} from "./components/order/order/order.component";
import { NavbarComponent} from "./components/navbar/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
