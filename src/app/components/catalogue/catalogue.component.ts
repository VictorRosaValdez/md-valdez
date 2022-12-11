import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mockProducts } from 'src/app/data/mock-data';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResponse } from 'src/app/models/product.model';
import { DisplayProductCatalogueService } from 'src/app/services/display-product-catalogue.service';
import { environment } from 'src/environments/environment';

const url = environment.apiURLProducts
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  @Input() products: Product [] = [];

  _products: Product[] = [];

  
 
  productsmock = mockProducts;

  constructor(
    private http: HttpClient,
    private router: Router,
    private displayProduct: DisplayProductCatalogueService
    ) { }

  ngOnInit(): void {

    this.fetchProducts()
  }

    
    goToProduct(productId: number){
      this.router.navigate(['product', productId]);
    }
  
    private fetchProducts(): void{

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
