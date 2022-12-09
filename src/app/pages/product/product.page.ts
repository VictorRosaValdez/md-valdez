import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { elementAt } from 'rxjs';
import { mockProducts } from 'src/app/data/mock-data';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss']
})
export class ProductPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    // const productId = this.route.snapshot.paramMap.get('id')
    // const foundProduct = this.products.find((element)=> {
    //   return element.productId === Number(productId);
    // })
    sessionStorage.setItem('product', JSON.stringify(1))
  }


}
