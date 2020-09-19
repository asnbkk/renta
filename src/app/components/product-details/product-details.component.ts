import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService, private location: Location) { }
  public id
  public prod
  public loader = false
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('product_id')
    let prod = this.productService.selectedProduct
    if (prod) this.prod = prod
    else this.productService.getProductInfo(this.id).subscribe(data => {this.prod = data})
    console.log(prod)
  }
  goBack() {
    this.location.back()
  }
}
