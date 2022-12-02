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
  
  icon: string | undefined;

  currentProduct: Product | undefined;

  constructor() { }

  ngOnInit(): void {

    this.setProductIcon();
  }

  setProductIcon(){
    this.category = this.category?.toLowerCase();
    if (this.category === 'shoes') {
      this.icon = 'globe';
    } else if (this.category === 'coat') {
      this.icon = 'music-note-beamed';
    } else if (this.category === 'shirt') {
      this.icon = 'camera-reels';
    } else if (this.category === 'pants') {
      this.icon = 'joystick';
    } else {
      this.icon = 'jewelry';
    }
  }

}
