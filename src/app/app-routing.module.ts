import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ProductPage } from './pages/product/product.page';
import { HttpClientModule } from '@angular/common/http';
import { AccountPage } from './pages/account/account.page';
import { AuthGuard } from '@auth0/auth0-angular';
import { SearchPage } from './pages/search/search.page';

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
  },

  {
    path: 'search/:searchInput',
    component: SearchPage,
  },

  {
    path: 'account',
    component: AccountPage,
    canActivate: [AuthGuard],
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
