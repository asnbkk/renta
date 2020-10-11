import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    let model = this.productService.selectedPreview
    if (model)
    this.pModel.patchValue({
      name: model.name,
      description: model.description,
      category: {
        name: model.category.name,
        _id: model.category._id
      },
      subcategory: {
        name: model.subcategory.name,
        _id: model.subcategory._id
      },
      priceForHour: model.priceForHour,
      priceForDay: model.priceForDay,
      priceForWeek: model.priceForWeek,
      image: model.image,
      user: {
        email: model.user.email,
        name: model.user.name,
        phone: model.user.phone
      }
    })
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

  get name() {
    return this.pModel.get('name')
  }
  get description() {
    return this.pModel.get('description')
  }
  get category() {
    return this.pModel.get('category')
  }
  get subcategory() {
    return this.pModel.get('subcategory')
  }
  get priceForHour() {
    return this.pModel.get('priceForHour')
  }
  get priceForDay() {
    return this.pModel.get('priceForDay')
  }
  get priceForWeek() {
    return this.pModel.get('priceForWeek')
  }
  get username() {
    return this.pModel.get('user.name')
  }
  get phone() {
    return this.pModel.get('user.phone')
  }
  get email() {
    return this.pModel.get('user.email')
  }

  mask: any[] = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  phonenumber(inputtxt) {
    if(inputtxt) {
      let phoneno = /^(\+7|7|8)?[\s\-]?\(?[789][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;
      if (inputtxt.match(phoneno)) return true;
      return false;
    }
  }
  emailValidation(email) {
    let _email = /\S+@\S+\.\S+/
    if (!_email.test(email)) return false
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
    this.pModel.patchValue({
      user: {
        email: email,
        name: username
      }
    })
  }


  onBlur(): void {
    let _category = this.pModel.get('category._id').value
    if (_category !== '') {
      let category = this.categories.find(c => c._id === _category)
      this.subcategories = [...category.subcategories]
    }
  }

  findCategorySubcategoryName() {
    let category = this.pModel.get('category._id').value
    let categoryList = JSON.parse(localStorage.getItem('categories'))
    let selectedCategory = categoryList.find(o => o._id == category)
    console.log(selectedCategory)

    let subcategory = this.pModel.get('subcategory._id').value
    let selectedSubcategory = selectedCategory.subcategories.find(o => o._id == subcategory)

    this.pModel.patchValue({
      category: {
        name: selectedCategory.name
      },
      subcategory: {
        name: selectedSubcategory.name
      }
    })
  }

  onPreview() {
    this.findCategorySubcategoryName()
    this.router.navigate(['preview'])
    this.productService.onProductPreview(this.pModel.value, this.pModel)
  }

  onSubmit(): void {
    this.findCategorySubcategoryName()
    this.pModel.reset()
    // let isPhoneValid = this.phonenumber(this.productModel.user.phone)
    // if(isPhoneValid) {
    //   this.productService.setProduct(this.productModel).subscribe(
    //     res => this.router.navigate(['personal', this.productModel.user.email]),
    //     error => console.log(error)
    //   )
    // }
  }
}
