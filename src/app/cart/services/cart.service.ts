import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Category, Product } from 'src/app/shared/models/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = {
    products: [{
      category: Category.Laptops,
      description: 'desc',
      isAvaliable: null,
      name: 'name',
      price: 20
    }]
  };

  private channel = new Subject<Product>();

  public channel$ = this.channel.asObservable();

  publishData(data: Product) {
    this.channel.next(data);
    console.log('Publishin', this.cart);
  }

  constructor() { }

  // public addProduct(product: Product) {
  //   this.cart.products.push(product);
  //   console.log('From cart service', this.cart);
  // }
}
