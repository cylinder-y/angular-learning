import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/cart/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }
}
