import { SearchProductPipe } from './search-product.pipe';

describe('SearchProductPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchProductPipe();
    expect(pipe).toBeTruthy();
  });

  it('checks Transformation', () => {
    const pipe = new SearchProductPipe();
    expect(pipe.transform([{
      id: 1,
      imageURL: 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png',
      name: 'Black Polo',
      type: 'Polo',
      price: 250,
      currency: 'INR',
      color: 'Black',
      gender: 'Men',
      quantity: 3
    }, {
      id: 1,
      imageURL: 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png',
      name: 'Black Hodie',
      type: 'Hodie',
      price: 250,
      currency: 'INR',
      color: 'Black',
      gender: 'Men',
      quantity: 3
    }], [], [], [], ['Polo'])).toBe([{
      id: 1,
      imageURL: 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png',
      name: 'Black Polo',
      type: 'Polo',
      price: 250,
      currency: 'INR',
      color: 'Black',
      gender: 'Men',
      quantity: 3
    }]);
  })
});
