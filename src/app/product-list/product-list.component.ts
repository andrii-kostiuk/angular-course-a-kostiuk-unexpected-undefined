import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import { Product } from '../core/models/classProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  private _productsJSON = products;
  productsArr : Array<Product> = [];

  ngOnInit(){
    
    this._productsJSON.forEach(element => { this.productsArr.push(new Product(element.name, element.price, element.description));
    });
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale.')
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/