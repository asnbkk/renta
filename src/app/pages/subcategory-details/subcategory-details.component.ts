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
    private renderer: Renderer2
  ) { }
  public id
  public title
  public products = []

  public loader = true
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params.id.split('$')[0]
      this.title = params.id.split('$')[1]

      this.productService.getProducts(this.id).subscribe(data => {
        this.products = data
      })
    });
  }


  ngAfterViewInit() {
    this.loader = false
  }

}
