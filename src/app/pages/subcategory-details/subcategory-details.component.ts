import { Component, OnInit } from '@angular/core';
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
    private productService: ProductService
    ) { }
  public id
  public title
  public products = []
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id').split('$')[0]
    this.title = this.route.snapshot.paramMap.get('id').split('$')[1]

    this.productService.getProducts(this.id).subscribe(data => {
      this.products = data
      console.log(data)
    })
  }

}
