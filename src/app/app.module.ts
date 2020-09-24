import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/app.component'
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SvgComponent } from './components/svg/svg.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { ActionCardComponent } from './components/action-card/action-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubcategoryDetailsComponent } from './pages/subcategory-details/subcategory-details.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubcategoryListComponent } from './components/subcategory-list/subcategory-list.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './pages/admin-categories/admin-categories.component';
import { AdminSubcategoriesComponent } from './pages/admin-subcategories/admin-subcategories.component';
import { AdminGroupsComponent } from './pages/admin-groups/admin-groups.component';
import { AdminCitiesComponent } from './pages/admin-cities/admin-cities.component';
import { AuthGuard } from './auth.guard';
import {TextMaskModule} from 'angular2-text-mask'


// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SvgComponent,
    ButtonComponent,
    SearchComponent,
    CategoryComponent,
    LoginComponent,
    RegistrationComponent,
    NewsCardComponent,
    ActionCardComponent,
    FooterComponent,
    SubcategoryDetailsComponent,
    ProductCardComponent,
    ProductCreateComponent,
    LoaderComponent,
    ProductDetailsComponent,
    SubcategoryListComponent,
    SearchPageComponent,
    AdminComponent,
    AdminProductsComponent,
    AdminCategoriesComponent,
    AdminSubcategoriesComponent,
    AdminGroupsComponent,
    AdminCitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TextMaskModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
