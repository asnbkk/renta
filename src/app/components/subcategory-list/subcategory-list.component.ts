import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.css']
})
export class SubcategoryListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }
  public title
  public subcategories
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let categoryList = JSON.parse(localStorage.getItem('categories'))
      let selectedCategory = categoryList.find(o => o._id == params.id)
      this.title = selectedCategory.name
      this.subcategories = selectedCategory.subcategories
    })
  }

}
