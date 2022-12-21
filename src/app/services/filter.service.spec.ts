import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';

describe('FilterService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create filter menu list', () => {
    console.log(JSON.stringify(service.getFilterList()));
    expect(service.getFilterList()).toEqual([{ "id": 0, "title": "Colour", "subMenu": [{ "isActive": false, "name": "Red" }, { "isActive": false, "name": "Blue" }, { "isActive": false, "name": "Green" }] }, { "id": 1, "title": "Gender", "subMenu": [{ "isActive": false, "name": "Men" }, { "isActive": false, "name": "Women" }] }, { "id": 2, "title": "Price", "subMenu": [{ "isActive": false, "name": "0 - Rs250", "upperLimit": 250, "lowerLimit": 0 }, { "isActive": false, "name": "Rs251 - Rs450", "upperLimit": 450, "lowerLimit": 251 }, { "isActive": false, "name": "Rs450", "upperLimit": 9999999, "lowerLimit": 450 }] }, { "id": 3, "title": "Type", "subMenu": [{ "isActive": false, "name": "Polo" }, { "isActive": false, "name": "Hoodie" }, { "isActive": false, "name": "Basic" }] }]);
  });

});
