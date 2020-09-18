import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    ) {}

  public categories = []
  public selectedCategory 
  ngOnInit(): void {
    let categories = JSON.parse(localStorage.getItem('categories'))
    if(categories.length != 0) this.categories = categories
    else this.categoryService.getCategories().subscribe(data => { this.categories = data })
    
    let firstCategory = this.categories[0]
    // this.router.navigate(['category', firstCategory._id])
  }
}
