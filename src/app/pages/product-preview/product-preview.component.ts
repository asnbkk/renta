import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {
  public id
  public prod
  public loader = false
  constructor(private location: Location, private prodService: ProductService) { }

  ngOnInit(): void {
    let preview = this.prodService.selectedPreview
    if(preview) {
      this.prod = preview
    }
  }

  goBack() {
    this.location.back()
  }
}
 