import { TestBed } from '@angular/core/testing';

import { DisplayProductCatalogueService } from './display-product-catalogue.service';

describe('DisplayProductCatalogueService', () => {
  let service: DisplayProductCatalogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayProductCatalogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
