import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  filterObj: unknown[][] = [[], [], [], []];

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
        this.productList = data;
        console.log('I ran', data);
      }
    );
    this.storageService.getCartUpdateEvent().subscribe(
      product => {
        console.log(product);
        this.productList.forEach(ele => {
          if (ele.id === product.id) ele.quantity--;
        });
      }
    );
  }

  public filter(event: Filter[]) {
    this.filterObj = [[], [], [], []];
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
