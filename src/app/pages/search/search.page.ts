import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { DisplayProductCatalogueService } from 'src/app/services/display-product-catalogue.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit {

  get products (): Product[]{

    return this.displayProduct.products;
  }

  filteredProducts: Product[] = this.products;

  // If no projects are found, searchPageMessage is set to noProjectsFound
  searchPageMessage: string = "";
  noProductsFound: string = "Geen product gevonden. Alstublieft gebruikt een andere zoekterm.";

  constructor(
    private displayProduct: DisplayProductCatalogueService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    // Fetch all products from API
    this.displayProduct.fetchProducts();
    // Filter product based on search input in params
    this.route.params.subscribe(params => {
      if (params['searchInput']) {
        this.filteredProducts = this.products.filter(function(p) {
          return (p.name.toLowerCase().includes(params['searchInput'].toLowerCase()) ||
                  p.category.toLowerCase().includes(params['searchInput'].toLowerCase()) ||
                  p.description.toLowerCase().includes(params['searchInput'].toLowerCase()));
        });
        if (this.filteredProducts.length === 0) {
          this.searchPageMessage = this.noProductsFound;
        } else {
          this.searchPageMessage = "";
        }
      } 
    })

  }

}
