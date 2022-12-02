import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  selectedProduct: Product | undefined;

  constructor() { }
  
  ngOnInit(): void {
    this.selectedProduct = JSON.parse(
      sessionStorage.getItem('product') || '{}'
    );
  }

}
