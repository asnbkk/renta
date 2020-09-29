import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rent-price-counte',
  templateUrl: './rent-price-counte.component.html',
  styleUrls: ['./rent-price-counte.component.css']
})
export class RentPriceCounteComponent implements OnInit {
  @Input() price
  @Input() period
  @Input() order
  public counter = 0
  constructor() { }

  @ViewChild('divElements')
  public divElements: ElementRef;

  ngOnInit(): void {
    if(this.order == 0) this.counter = 1
  }

  onIncrement() {
    this.counter ++
  }
  onDecrement() {
    if(this.counter > 0)
      this.counter --
  }
}
