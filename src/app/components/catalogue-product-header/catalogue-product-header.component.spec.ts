import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueProductHeaderComponent } from './catalogue-product-header.component';

describe('CatalogueProductHeaderComponent', () => {
  let component: CatalogueProductHeaderComponent;
  let fixture: ComponentFixture<CatalogueProductHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueProductHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueProductHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
