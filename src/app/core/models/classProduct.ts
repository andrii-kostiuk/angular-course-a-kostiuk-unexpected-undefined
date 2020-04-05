import { Observable, of } from "rxjs";
import { ColorList } from "./enumColorList";
import { ColorCount } from "./interfaceColorCount";

export class Product{
  name: string;
  price: number;
  description: string;
  totalCount: number = 0;
  colorCountList: Array<ColorCount>=[];

  constructor (name :string, price :number = 0, description :string ='') {
    
    this.name = name;
    this.price = price;
    this.description = description;

    let count: number=0;
    
    for (let color in ColorList) {
      this.colorCountList.push({ color, count})
    }
  }
}