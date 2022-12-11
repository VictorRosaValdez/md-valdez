import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResponse } from '../models/product.model';
import { environment } from 'src/environments/environment';

const url = environment.apiURLProducts

@Injectable({
  providedIn: 'root'
})
export class DisplayProductCatalogueService {

  // Properties
  private _products: Product [] =[]
  private _selectedProduct: Product | undefined;

  // Dependency Injection 
  constructor(private http: HttpClient) {

   }
 
   get selectedProduct(): Product | undefined {
    return this._selectedProduct;
  }

  set selectedProject(product: Product | undefined) {
    this._selectedProduct = product;
  }

  get products(): Product[] {
    return this._products;
  }

  set products(productList: Product[]) {
    this._products = productList;
  }
  // Get connection with the API
  
  public fetchProducts(): void{

    // Observables
    this.http.get<ProductResponse[]>(url).subscribe({

      next: (response: any) =>{
        this._products = response.map((product: Product)=>{ 
          return {
            ...product
          }
        });
      },
      error: () =>{},
      complete: () =>{}
    });

  }

}
