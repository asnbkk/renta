import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-subcategories',
  templateUrl: './admin-subcategories.component.html',
  styleUrls: ['./admin-subcategories.component.css']
})
export class AdminSubcategoriesComponent implements OnInit {
  public categories = []
  subcategoryModel = {
    category: '',
    name: ''
  }
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    })
  }
  onSubmit() {
    this.categoryService.setSubcategory(this.subcategoryModel.category, this.subcategoryModel.name).subscribe()
  }
}
