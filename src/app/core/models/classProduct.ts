// TODO it is better to named this file product.model.ts, enum file - color-list.enum.ts,
// camelCase isn't used for file naming
// TODO unused import need to be removed
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

    Object.keys(ColorList).map(key => this.colorCountList.push({color: ColorList[key], count}));
    
    // for (let color in ColorList) {
    //   this.colorCountList.push({ color, count})
    // }

  // TODO could  be implemented like this
    //// let count: number=0;

    // for (let color in ColorList) {
    //   this.colorCountList.push({ color, count: 0})
    // }
  }
}