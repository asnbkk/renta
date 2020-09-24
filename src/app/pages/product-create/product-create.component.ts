import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private userService: UserService,
    private router: Router
  ) {

  }

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
    email: '',
    username: '',
    phone: ''
  }

  mask: any[] = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  phonenumber(inputtxt) {
    let phoneno = /^(\+7|7|8)?[\s\-]?\(?[789][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;
    if (inputtxt.match(phoneno)) return true;
    return false;
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
      data.forEach(cat => {
        this.subcategories.push(...cat.subcategories)
      });
      let email = localStorage.getItem('email')
      let username = localStorage.getItem('username')
      if (email) this.productModel.email = email
      if (username) this.productModel.username = username
    })
  }


  onBlur(): void {
    if (this.productModel.category !== '') {
      let category = this.categories.find(c => c._id === this.productModel.category)
      this.subcategories = [...category.subcategories]
    }
  }

  onSubmit(): void {
    let isPhoneValid = this.phonenumber(this.productModel.phone)
    if(isPhoneValid) {
      this.productService.setProduct(this.productModel).subscribe()
    }
    else console.log('phone is not valid')
  }
}
