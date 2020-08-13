import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  public id
  public prod
  public loader = true
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('product_id')
    this.productService.getProductInfo(this.id).subscribe(data => {
    this.prod = data
    console.log(this.prod)
    })
  }

  ngAfterViewInit() {
    this.loader = false
  }

}
