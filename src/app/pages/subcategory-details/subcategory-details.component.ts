import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-subcategory-details',
  templateUrl: './subcategory-details.component.html',
  styleUrls: ['./subcategory-details.component.css']
})
export class SubcategoryDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { 
    this.loader = true
  }
  public id = this.route.snapshot.paramMap.get('id')
  public title
  public categoryName
  public products = []

  public loader
  ngOnInit(): void {
    this.loader = true
    this.productService.getProducts(this.id).subscribe(data => {
      this.products = data
      console.log(data)
      this.categoryName = data[0].category.name
      this.title = data[0].subcategory.name
    })
  }


  ngAfterViewInit() {
    this.loader = false
  }

}
