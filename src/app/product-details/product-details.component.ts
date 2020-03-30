import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    /*this.route.paramMap.subscribe(
      params => this.product = products[+params.get('productId')]
    );*/
    this.route.paramMap.subscribe(
      params => 
        { let ind:number= +params.get('productId');
          console.log(params.get('productId'));
          console.log(+params.get('productId'));
          this.product =products[ind]
        }
    );
  }

}