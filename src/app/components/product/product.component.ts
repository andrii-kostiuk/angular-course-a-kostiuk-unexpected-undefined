import { Component, OnInit } from '@angular/core';
import { Input, Output } from "@angular/core";
import { Product } from '../../core/models/classProduct';
import { ColorCount } from 'src/app/core/models/interfaceColorCount';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() productColorCountList:Array<ColorCount>;
  
  constructor() { }

  ngOnInit() {
  }
  
  totalEventHandler(_p:number):void {
    this.product.totalCount = this.product.totalCount + _p;
  }

}