import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  nameModel = {
    name: ''
  }
  ngOnInit(): void {
  }

  onSubmit() {

    this.categoryService.setCategory(this.nameModel.name).subscribe()
  }

}
