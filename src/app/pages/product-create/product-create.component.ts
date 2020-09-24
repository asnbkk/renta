import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) { }

  public categories = []
  public subcategories = []
  public productModel = {
    name: '', 
    description: '',
    category: '',
    subcategory: '',
    priceForHour: null,
    priceForDay: null,
    priceForWeek: null,
    keywords: '',
    image: '',
    email: ''
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
      data.forEach(cat => {
        this.subcategories.push(...cat.subcategories)
      });
      let email = localStorage.getItem('email')
      if (email) this.productModel.email = email
    })
  }

  
  onBlur(): void {
    if (this.productModel.category !== '') {
      let category = this.categories.find(c => c._id === this.productModel.category)
      this.subcategories = [...category.subcategories]
    }
  }
  
  onSubmit(): void {
    console.log(this.productModel)
    // this.productService.setProduct(this.productModel).subscribe()
  }
}
