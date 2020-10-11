import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, AfterViewInit {
  public ads = []
  loading: boolean = true
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
      this.getAds()
  }

  ngAfterViewInit() {
    this.loading = false
  }
  
  getAds() {
    this.productService.getAdminProducts().subscribe(data => {
      this.ads = data
    })
  }

}
