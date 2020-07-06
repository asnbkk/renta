import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public news = [
    {"img": "assets/img/image 3.png", "text": "Как построить бизнес на аренде товара?"},
    {"img": "assets/img/image 4.png", "text": "ТОП 5 советов при выборе товара"},
    {"img": "assets/img/image 3.png", "text": "Как построить бизнес на аренде товара?"},
    {"img": "assets/img/image 4.png", "text": "ТОП 5 советов при выборе товара"}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
}
