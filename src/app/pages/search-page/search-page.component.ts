import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  get searchRes() {
    return this.productService.searchRes
  }

  onRedirect(data) {
    this.router.navigate(['product-details', data._id])
    this.productService.onProductSelect(data)
    // this.productService.onDeleteSearchRes()
  }

  ngOnDestroy() {
    this.productService.onDeleteSearchRes()
  }
}
