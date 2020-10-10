import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    private router: Router,
    private fb: FormBuilder
  ) {
    if(this.productService.selectedPreview  )
    this.productModel = this.productService.selectedPreview
  }

  public categories = []
  public subcategories = []

  pModel = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    category: this.fb.group({
      name: [''],
      _id: ['', Validators.required]
    }),
    subcategory: this.fb.group({
      name: [''],
      _id: ['', Validators.required]
    }),
    priceForHour: [null, Validators.required],
    priceForDay: [null, Validators.required],
    priceForWeek: [null, Validators.required],
    keywords: '',
    image: ['', Validators.required],
    user: this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required]
    })
  })
  
  public productModel = {
    name: '',
    description: '',
    category: {
      name: '',
      _id: ''
    },
    subcategory: {
      name: '',
      _id: ''
    },
    priceForHour: null,
    priceForDay: null,
    priceForWeek: null,
    keywords: '',
    image: '',
    user: {
      email: '', 
      name: '', 
      phone: ''
    }
  }

  mask: any[] = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  phonenumber(inputtxt) {
    let phoneno = /^(\+7|7|8)?[\s\-]?\(?[789][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;
    if (inputtxt.match(phoneno)) return true;
    return false;
  }
  emailValidation(email) {
    let _email = /\S+@\S+\.\S+/
    if(!_email.test(email)) return false
    else return true
  }

  ngOnInit(): void {
    // this.categoryService.getCategories().subscribe(data => {
    //   this.categories = data
    //   data.forEach(cat => {
    //     this.subcategories.push(...cat.subcategories)
    //   });
    //   let email = localStorage.getItem('email')
    //   let username = localStorage.getItem('username')
    //   if (email) this.productModel.user.email = email
    //   if (username) this.productModel.user.name = username
    //   console.log(this.productModel.user.name)
    // })
      let category = JSON.parse(localStorage.getItem('categories'))
      this.categories = category
      this.categories.forEach(cat => {
        this.subcategories.push(...cat.subcategories)
      })
      let email = localStorage.getItem('email')
      let username = localStorage.getItem('username')
      if (email) this.productModel.user.email = email
      if (username) this.productModel.user.name = username
  }


  onBlur(): void {
    if (this.productModel.category._id !== '') {
      let category = this.categories.find(c => c._id === this.productModel.category._id)
      this.subcategories = [...category.subcategories]
    }
  }

  onPreview() {
    let category = this.productModel.category._id
    let categoryList = JSON.parse(localStorage.getItem('categories'))
    let selectedCategory = categoryList.find(o => o._id == category)
    this.productModel.category.name = selectedCategory.name

    let subcategory = this.productModel.subcategory._id
    let selectedSubcategory = selectedCategory.subcategories.find(o => o._id == subcategory)
    this.productModel.subcategory.name = selectedSubcategory.name
    this.router.navigate(['preview'])
    this.productService.onProductPreview(this.productModel)
  }

  onSubmit(): void {
    console.log(this.pModel.value)
    //TODO: find name of category && subcategory via _id
    // let isPhoneValid = this.phonenumber(this.productModel.user.phone)
    // if(isPhoneValid) {
    //   this.productService.setProduct(this.productModel).subscribe(
    //     res => this.router.navigate(['personal', this.productModel.user.email]),
    //     error => console.log(error)
    //   )
    // }
  }
}
