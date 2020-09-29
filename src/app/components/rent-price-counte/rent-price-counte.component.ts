import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-price-counte',
  templateUrl: './rent-price-counte.component.html',
  styleUrls: ['./rent-price-counte.component.css']
})
export class RentPriceCounteComponent implements OnInit {
  @Input() price
  @Input() period
  constructor() { }

  ngOnInit(): void {
  }

}
