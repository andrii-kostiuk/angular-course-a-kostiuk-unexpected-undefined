import { Component, OnInit, Input, Output } from '@angular/core';
import { ColorCount } from '../../core/models/enumColorCount';

@Component({
  selector: 'app-product-color',
  templateUrl: './product-color.component.html',
  styleUrls: ['./product-color.component.css']
})
export class ProductColorComponent implements OnInit {

  @Input() productColorCount: ColorCount;

  constructor() { }

  ngOnInit() {
  }

}