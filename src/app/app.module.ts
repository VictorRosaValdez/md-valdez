import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from "./app.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { ProductPage } from './pages/product/product.page';
import { OrderPage } from './pages/order/order.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { CatalogueProductHeaderComponent } from './components/catalogue-product-header/catalogue-product-header.component';
import { LoginPage } from './pages/login/login.page';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    ProductPage,
    OrderPage,
    NavbarComponent,
    SearchbarComponent,
    CatalogueComponent,
    CatalogueProductHeaderComponent,
    LoginPage,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
