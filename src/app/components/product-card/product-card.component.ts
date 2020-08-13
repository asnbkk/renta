import { Component, OnInit, Input, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() data
  constructor() { }

  ngOnInit(): void {
  }

}
