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
    // TODO try to unsubscribe here https://netbasal.com/when-to-unsubscribe-in-angular-d61c6b21bad3
    this.route.paramMap.subscribe(
      params => 
        { let ind:number= +params.get('productId');
        // TODO it is better to use const ind, because ind will not be changed
          console.log(params.get('productId'));
          console.log(+params.get('productId'));
          this.product =products[ind]
        }
    );
  }

}