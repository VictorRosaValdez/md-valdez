import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueProductHeaderclearComponent } from './catalogue-product-headerclear.component';

describe('CatalogueProductHeaderclearComponent', () => {
  let component: CatalogueProductHeaderclearComponent;
  let fixture: ComponentFixture<CatalogueProductHeaderclearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueProductHeaderclearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueProductHeaderclearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
