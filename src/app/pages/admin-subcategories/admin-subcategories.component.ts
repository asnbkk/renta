import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';

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
  constructor(private categoryService: CategoryService, private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    })
  }
  onSubmit() {
    this.subcategoryService.setSubcategory(this.subcategoryModel.category, this.subcategoryModel.name).subscribe()
  }
}
