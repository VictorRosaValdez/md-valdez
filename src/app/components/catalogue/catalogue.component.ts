import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mockProducts } from 'src/app/data/mock-data';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  //@Input() products: Product [] = [];

  products = mockProducts;

  constructor(private router: Router) { }

  ngOnInit(): void {}

    
    goToProduct(productId: number){
      this.router.navigate(['product', productId]);
    }
  

}
