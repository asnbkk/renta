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
  ngOnInit(): void {
  }

  @Input()
  set data(value) {
    this._data = value
  }
  
  get data() {
    return this._data
  }
}
