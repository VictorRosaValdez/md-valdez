import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from "./app.component";
import { ProductComponent} from "./components/product/product/product.component";
import { OrderComponent} from "./components/order/order/order.component";
import { NavbarComponent} from "./components/navbar/navbar/navbar.component";
import { ProductPage } from './pages/product/product.page';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    NavbarComponent,
    ProductPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
