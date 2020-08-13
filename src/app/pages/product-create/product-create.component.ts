import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
  ) { }

  public categories = []
  public subcategories = []
  public productModel = {
    name: '', 
    information: '',
    description: '',
    category: '',
    subcategory: '',
    typeOfRent: '',
    price: 0,
    keywords: '',
    image: ''
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
      data.forEach(cat => {
        this.subcategories.push(...cat.subcategories)
      });
    })
  }

  
  onBlur(): void {
    if (this.productModel.category !== '') {
      let category = this.categories.find(c => c._id === this.productModel.category)
      this.subcategories = [...category.subcategories]
    }
  }
  
  onSubmit(): void {
    console.log(this.productModel.category)
  }
}
