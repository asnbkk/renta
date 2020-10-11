import { Component, OnInit, Input, AfterViewInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  constructor(private router: Router) { }
  private _data
  @Input() admin: boolean
  ngOnInit(): void {
  }

  @Input()
  set data(value) {
    if(value.category == null) value.category = {name: '', _id: ''}
    if(value.subcategory == null) value.subcategory = {name: '', _id: ''}
    this._data = value
  }
  
  get data() {
    return this._data
  }
}
