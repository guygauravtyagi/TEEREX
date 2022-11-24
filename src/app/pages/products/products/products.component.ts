import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/data-models/product-data-models';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products$: Observable<Product[]>

  constructor(
    private mainService: MainService
  ) {
    this.products$ = this.mainService.getData();
  }

}
