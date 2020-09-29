import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  public total: number
  public tempArray = []
  constructor(private location: Location, private prodService: ProductService,
              private router: Router) { }

  @ViewChild('divElements')
  public divElements: ElementRef;

  ngOnInit(): void {
    let preview = this.prodService.selectedPreview
    if(preview) {
      this.prod = preview
      this.tempArray.push({title: 'За час', val: this.prod.priceForHour})
      this.tempArray.push({title: 'За день', val: this.prod.priceForDay})
      this.tempArray.push({title: 'За неделю', val: this.prod.priceForWeek})
    }
    this.total = this.tempArray[0].val
    console.log('hello')
  }

  receiveTotal(value) {
    console.log(value)
    if(this.total + value >= 0)
    this.total += value
  }

  onSubmit(): void {
    console.log(this.divElements.nativeElement.childNodes[0])
      // this.prodService.setProduct(this.prod).subscribe(
      //   res => this.router.navigate(['personal', this.prod.user.email]),
      //   error => console.log(error)
      // )
  }

  goBack() {
    this.location.back()
  }
}
 