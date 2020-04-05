import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';

import { ColorCount } from '../../core/models/interfaceColorCount';


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

  @Input() productColorCountList:Array<ColorCount>;
  @Output() itemColorCount: ColorCount;
  @Output() totalEvList:EventEmitter<number> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  
  itemEventHandler(_p:number):void {
    this.totalEvList.emit(_p);
  }
}