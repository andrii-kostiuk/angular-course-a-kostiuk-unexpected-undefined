import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';

import { ColorCount } from '../../core/models/enumColorCount';


@Component({
  selector: 'app-product-color-list',
  templateUrl: './product-color-list.component.html',
  styleUrls: ['./product-color-list.component.css'],
  /*imports: [
  MatListModule,
  MatExpansionModule,
  MatButtonModule,
  MatInputModule ]*/
})
export class ProductColorListComponent implements OnInit {

  @Input() producColorList:Array<ColorCount>;

  constructor() { }

  ngOnInit() {
  }

}