import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ProductPage } from './pages/product/product.page';

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

  {
    path:'product/:id',
    component:ProductPage,
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
