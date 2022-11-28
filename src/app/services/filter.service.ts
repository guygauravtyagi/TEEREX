import { Injectable } from '@angular/core';
import { Filter } from '../data-models/filter-data-models';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public getFilterList(): Filter[] {
    return [{
      id: 0,
      title: 'Colour',
      subMenu: [{
        isActive: false,
        name: 'Red',
      }, {
        isActive: false,
        name: 'Blue',
      }, {
        isActive: false,
        name: 'Green',
      }]
    }, {
      id: 1,
      title: 'Gender',
      subMenu: [{
        isActive: false,
        name: 'Men',
      }, {
        isActive: false,
        name: 'Women',
      }]
    }, {
      id: 2,
      title: 'Price',
      subMenu: [{
        isActive: false,
        name: '0 - Rs250',
        upperLimit: 250,
        lowerLimit: 0,
      }, {
        isActive: false,
        name: 'Rs251 - Rs450',
        upperLimit: 450,
        lowerLimit: 251,
      }, {
        isActive: false,
        name: 'Rs450',
        upperLimit: 9999999,
        lowerLimit: 450,
      }]
    }, {
      id: 3,
      title: 'Type',
      subMenu: [{
        isActive: false,
        name: 'Polo',
      }, {
        isActive: false,
        name: 'Hoodie',
      }, {
        isActive: false,
        name: 'Basic',
      }]
    }]
  }
}
