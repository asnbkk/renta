import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-subcategory-details',
  templateUrl: './subcategory-details.component.html',
  styleUrls: ['./subcategory-details.component.css']
})
export class SubcategoryDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private location: Location
  ) { 
    this.loader = false
  }
  public id = this.route.snapshot.paramMap.get('id')
  public categoryName = this.route.snapshot.paramMap.get('category')
  public title = this.route.snapshot.paramMap.get('subcategory')
  public products = []

  public loader
  ngOnInit(): void {
    // this.loader = true
    this.productService.getProducts(this.id).subscribe(data => {
      this.products = data
      console.log(data)
      // this.categoryName = data[0].category.name
      // this.title = data[0].subcategory.name
    })
  }
  onRedirect(data) {
    this.router.navigate(['product-details', data._id])
    this.productService.onProductSelect(data)
  }

  goBack() {
    this.location.back()
  }

  // ngAfterViewInit() {
    // this.loader = false
  // }

}
