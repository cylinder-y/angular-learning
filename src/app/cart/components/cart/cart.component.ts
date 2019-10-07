import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';
import { Subscription } from 'rxjs';
import { Category, Product } from 'src/app/shared/models/product';
import { ProductComponent } from 'src/app/products/components/product/product.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.sub = this.cartService.channel$.subscribe(
      data => (console.log('Accepting', data))
    );
    console.log(this.sub);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get cart(): Cart {
    return this.cartService.cart;
  }
}
