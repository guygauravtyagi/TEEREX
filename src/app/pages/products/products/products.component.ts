import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/data-models/cart-data-models';
import { Filter } from 'src/app/data-models/filter-data-models';

import { Product } from 'src/app/data-models/product-data-models';
import { FilterService } from 'src/app/services/filter.service';
import { MainService } from 'src/app/services/main.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>
  productList: Product[] = [];
  filterList: Filter[] = [];
  filterObj: unknown[][] = [[], [], [], [], []];

  constructor(
    private mainService: MainService,
    private storageService: StorageService,
    private filterService: FilterService
  ) {
    this.products$ = this.storageService.getProductsList();
    this.filterList = this.filterService.getFilterList();
  }

  public ngOnInit(): void {
    this.products$.subscribe(
      (data) => {
        this.productList = this.updateProductList(data);
      }
    );
    this.storageService.getCartUpdateEvent().subscribe(
      product => {
        this.productList.forEach(ele => {
          if (ele.id === product.id) ele.quantity--;
        });
        this.storageService.updateProductList(this.productList);
      }
    );
  }

  private updateProductList(prdoucts: Product[]): Product[] {
    this.storageService.getCart().forEach((cartItem: CartItem) => {
      prdoucts.forEach((product) => {
        if(product.id === cartItem.product.id) product.quantity = product.quantity - cartItem.quantity; 
      });
    });
    this.storageService.updateProductList(prdoucts);
    return prdoucts;
  }

  public filter(event: Filter[]) {
    this.filterObj = [[], [], [], [], []];
    event.forEach(filter => {
      filter.subMenu.forEach(element => {
        if(filter.id === 2 && element.isActive) {
          this.filterObj[filter.id].push({
            upperLimit: element.upperLimit,
            lowerLimit: element.lowerLimit
          })
        }
        else if (element.isActive)
          this.filterObj[filter.id].push(element.name);
      });
    });
    console.log(this.filterObj);
  }

  public addToCart(product: Product) {
    this.storageService.addToCart(product);
  }

}
