import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  public categories = []
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      console.log(data)
      this.categories = data
    })
  }

  getCategories() {
    
  }

}
