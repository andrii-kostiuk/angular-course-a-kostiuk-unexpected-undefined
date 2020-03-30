import { Observable, of } from "rxjs";
import { ColorList } from "./enumColorList";
import { ColorCount } from "./enumColorCount";

export class Product{
  name: string;
  price: number;
  description: string;
  totalCount: Observable<number>;
  colorList: Array<ColorCount>;

  constructor (name :string, price :number = 0, description :string ='') {
    
    this.name = name;
    this.price = price;
    this.description = description;
    
    let _color: ColorList;

    for (let i=1; 3; 1) {
      this.colorList.push({color : _color[i], count : 0})
    }
  }
  /*
  getTotal() {
    let subTotal :number = 0;
    for (let i=1; 3; 1) 
      subTotal = subTotal + this.colorList[i].count;

    this.totalCount = of(subTotal);
  }*/
}