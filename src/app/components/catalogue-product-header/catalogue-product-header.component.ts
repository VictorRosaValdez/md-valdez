import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-catalogue-product-header',
  templateUrl: './catalogue-product-header.component.html',
  styleUrls: ['./catalogue-product-header.component.scss']
})
export class CatalogueProductHeaderComponent implements OnInit {

  @Input() name: string | undefined;
  @Input() category: string | undefined;
  
  img: string | undefined;

  currentProduct: Product | undefined;

  constructor() { }

  ngOnInit(): void {

    this.setProductIcon();
  }

  setProductIcon(){
    this.category = this.category?.toLowerCase();
    if (this.category === 'shoes') {
      this.img = 'shoes';
    } else if (this.category === 'coat') {
      this.img = 'coat';
    } else {
      this.img = 'jewelry';
    }
  }

}
