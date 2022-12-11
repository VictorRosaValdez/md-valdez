import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResponse } from '../models/product.model';

const url = "https://localhost:7046/api/products"

@Injectable({
  providedIn: 'root'
})
export class DisplayProductCatalogueService {

  // Properties
  public _product: Product [] =[]

  // Dependency Injection 
  constructor(private http: HttpClient) {

   }
 /**
     * Display products
     */
  public displayProducts() {
      
  }
  // Get connection with the API
  public fetchProducts(): void{

        // Observables
        this.http.get<ProductResponse[]>(url).subscribe({

          next: (response: any) =>{
            this._product = response.map((product: Product)=>{ 
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
