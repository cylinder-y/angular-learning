import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Category } from 'src/app/shared/models/product';

@Injectable()
export class CartService {

  constructor() { }

  getCart() {
    const cart: Cart = {
      products : [{
        name: 'Macbook',
        category: Category.Laptops,
        description: 'Best laptop for front-end engineer',
        price: 1200
      },
      {
        name: 'iPhone X',
        category: Category.SmartPhones,
        description: 'The old one',
        price: 800
      },
      {
        name: 'iPad',
        category: Category.Laptops,
        description: 'Just laptop produced by apple',
        price: 800
      }]
    };

    return cart;
  }
}
