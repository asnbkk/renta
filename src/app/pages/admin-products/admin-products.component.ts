import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  private ads = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAds()
    console.log(this.ads)
  }

  getAds() {
    this.productService.getAdminProducts().subscribe(data => {
      this.ads = data
    })
  }

}
