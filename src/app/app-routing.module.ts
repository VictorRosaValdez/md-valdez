import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { LoginPage } from './pages/login/login.page';
import { ProductPage } from './pages/product/product.page';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'catalogue'
    
  },

  {
    path:'catalogue',
    component: CatalogueComponent,
  },

  // {
  //   path:'product/:id',
  //   component:ProductPage,
  // },

  {
    path: 'login',
    component: LoginPage
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
