import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, AfterViewInit {

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    ) {}

    @ViewChild('content') elementView: ElementRef;
    contentHeight: number
    screenHeight: number

    ngAfterViewInit() {
      this.screenHeight = window.innerHeight
      this.contentHeight = this.elementView.nativeElement.offsetHeight;
  }

    get isCategoryVisible(): boolean {
      return this.categoryService.isCategoryVisivle
    }

    toggleCategory() {
      this.categoryService.toggleCategoryVisibility()
    }

  public categories = []
  public selectedCategory 
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      console.log(data)
      this.categories = data
      this.selectedCategory = this.categories[0]
    })

  }

  onSelect(category) {
    this.selectedCategory = category
  }
  onRouteChange(path) {
    this.router.navigate(["/subcategory-details", path._id + "$" + path.name])
  }

}
