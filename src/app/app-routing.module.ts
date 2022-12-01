import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPage } from './pages/product/product.page';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'product'
    
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
