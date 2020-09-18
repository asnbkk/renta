import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SubcategoryDetailsComponent } from './pages/subcategory-details/subcategory-details.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SubcategoryListComponent } from './components/subcategory-list/subcategory-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'category', component: CategoryComponent, children: [
    {path: '', redirectTo: '/category/5f0cc0310280f43c8aa6c3ba', pathMatch: 'full'},
    {path: ':id', component: SubcategoryListComponent }
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'subcategory-details/:id', component: SubcategoryDetailsComponent },
  { path: 'product-details/:product_id', component: ProductDetailsComponent },
  { path: 'product-create', component: ProductCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
