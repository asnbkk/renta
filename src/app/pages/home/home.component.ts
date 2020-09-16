import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public loader = true
  public news = [
    {"img": "assets/img/image 3.png", "text": "Как построить бизнес на аренде товара?"},
    {"img": "assets/img/image 4.png", "text": "ТОП 5 советов при выборе товара"},
    {"img": "assets/img/image 3.png", "text": "Как построить бизнес на аренде товара?"},
    {"img": "assets/img/image 4.png", "text": "ТОП 5 советов при выборе товара"}
  ]
  constructor(private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      localStorage.setItem('categories', JSON.stringify(data))
    })
  }  
}
