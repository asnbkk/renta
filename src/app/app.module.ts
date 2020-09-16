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
    SubcategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
