import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmptyModule } from 'src/app/features';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        EmptyModule
      ],
      declarations: [ ProductsComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set filters', () => {
    component.filter([{
      "id": 0,
      "title": "Colour",
      "subMenu": [
         {
            "isActive": true,
            "name": "Red"
         },
         {
            "isActive": false,
            "name": "Blue"
         },
         {
            "isActive": false,
            "name": "Green"
         }
      ]
   }])
   expect(component.filterObj).toEqual([["Red"],[],[],[],[]]);
  });

  it('should toggle menu', () => {
    component.showModal = false;
    component.toggleMenu();
    expect(component).toBeTruthy();
  });
});
