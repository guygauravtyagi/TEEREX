import { Component, HostListener, OnInit } from '@angular/core';
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
  filterObj: unknown[][] = [[], [], [], [], []];
  smallScreenFlag = false;
  showModal = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setFiletrs((<Window>event.target).innerWidth);
  }

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
        this.productList = this.storageService.syncProductListWithCart(data);
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
    this.setFiletrs(window.innerWidth);
  }

  private setFiletrs(size: number) {
    if(size < 768) {
      this.smallScreenFlag = true;
      console.log(this.smallScreenFlag);
    } else {
      this.smallScreenFlag = false;
      console.log(this.smallScreenFlag);
    }
  }

  public filter(event: Filter[]) {
    this.filterObj = [[], [], [], [], []];
    event.forEach(filter => {
      filter.subMenu.forEach(element => {
        if (filter.id === 2 && element.isActive) {
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

  public toggleMenu() {
    this.showModal = !this.showModal;
  }

  public checkFor(event: Event) {
    this.filterObj[4].length = 0;
    this.filterObj[4].push((<HTMLInputElement>event.target).value.toLowerCase());
  }

}
