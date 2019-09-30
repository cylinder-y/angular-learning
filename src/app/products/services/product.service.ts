import { Injectable } from '@angular/core';

import { Product, Category } from '../../shared/models/product';

@Injectable()
export class ProductService {

  constructor() { }

  public getProducts() {
    const products: Product[] = [
      {
        name: 'Macbook',
        category: Category.Laptops,
        description: 'Best laptop for front-end engineer',
        price: 1200,
        isAvaliable: true
      },
      {
        name: 'iPhone X',
        category: Category.SmartPhones,
        description: 'The old one',
        price: 800,
        isAvaliable: true
      },
      {
        name: 'iPad',
        category: Category.Laptops,
        description: 'Just laptop produced by apple',
        price: 800,
        isAvaliable: true
      },
    ];

    return products;
  }
}
