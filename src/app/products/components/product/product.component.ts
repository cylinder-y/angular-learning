import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddToCart() {
    console.log('From Product');
    this.addToCart.emit(this.product);
  }
}
