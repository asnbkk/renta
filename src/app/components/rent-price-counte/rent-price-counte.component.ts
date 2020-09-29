import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-rent-price-counte',
  templateUrl: './rent-price-counte.component.html',
  styleUrls: ['./rent-price-counte.component.css']
})
export class RentPriceCounteComponent implements OnInit{
  @Input() price: number
  @Input() period
  @Input() order
  @Output() total: EventEmitter<any> = new EventEmitter<any>()
  public counter = 0
  constructor() { }

  @ViewChild('divElements')
  public divElements: ElementRef;

  ngOnInit(): void {
    if(this.order == 0) this.counter = 1
  }

  onIncrement() {
    this.counter ++
    this.total.emit(this.price)
  }
  onDecrement() {
    if(this.counter > 0)
      this.counter --
    this.total.emit(-this.price)
  }
}
