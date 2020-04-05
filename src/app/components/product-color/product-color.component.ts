import { Component, OnInit, Input, Output } from '@angular/core';
import { ColorCount } from '../../core/models/interfaceColorCount';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-color',
  templateUrl: './product-color.component.html',
  styleUrls: ['./product-color.component.css']
})
export class ProductColorComponent implements OnInit {

  @Input() itemColorCount: ColorCount;
  @Output() totalEvListItem: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  minusClick():void {
    this.itemColorCount.count--;
    this.totalEvListItem.emit(-1);
  }

  plusClick():void {
    this.itemColorCount.count++;
    this.totalEvListItem.emit(1);
  }
}