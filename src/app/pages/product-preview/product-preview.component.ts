import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {
  public id
  public prod
  public loader = false
  constructor(private location: Location, private prodService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    let preview = this.prodService.selectedPreview
    if(preview) {
      this.prod = preview
    }
  }

  onSubmit(): void {
      this.prodService.setProduct(this.prod).subscribe(
        res => this.router.navigate(['personal', this.prod.user.email]),
        error => console.log(error)
      )
  }

  goBack() {
    this.location.back()
  }
}
 