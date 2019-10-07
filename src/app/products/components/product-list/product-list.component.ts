import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(public productservice: ProductService) { }

  ngOnInit() {
    this.products = this.productservice.getProducts();
  }

  onAddToCart(product: Product) {
    console.log('From Product List', product);
    // TODO add product to cart
  }

}
