import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/data-models/product-data-models';
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

  constructor(
    private mainService: MainService,
    private storageService: StorageService
  ) {
    this.products$ = this.mainService.getData();
  }

  ngOnInit(): void {
    this.products$.subscribe(
      (next) => {
        this.productList = next;
      }
    )
    this.storageService.getCartUpdateEvent().subscribe(
      product => {

      }
    )
  }  

  addToCart(product: Product) {
    this.storageService.addToCart(product);
  }



}
