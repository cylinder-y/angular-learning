import { Component, OnInit } from '@angular/core';

import { Category } from './models/category';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name: string;
  description: string;
  price: number;
  category: Category;
  isAvaliable: boolean;

  constructor() { }

  ngOnInit() {
    this.name = 'Macbook';
    this.description = 'Best laptop for front-end engineer';
    this.price = 1200;
    this.category = Category.Laptops;
    this.isAvaliable = true;
  }

}
