import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../data-models/product-data-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.jso');
  }
}
