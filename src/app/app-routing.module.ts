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
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './pages/admin-categories/admin-categories.component';
import { AdminSubcategoriesComponent } from './pages/admin-subcategories/admin-subcategories.component';
import { AdminGroupsComponent } from './pages/admin-groups/admin-groups.component';
import { AdminCitiesComponent } from './pages/admin-cities/admin-cities.component';
import { AuthGuard } from './auth.guard';
import { ProductPreviewComponent } from './pages/product-preview/product-preview.component';
import { PersonalPageComponent } from './pages/personal-page/personal-page.component';
import { AdminGuard } from './admin.guard';
import { PersonalAdsComponent } from './pages/personal-ads/personal-ads.component';
import { PersonalSettingsComponent } from './pages/personal-settings/personal-settings.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'category', component: CategoryComponent, children: [
    // {path: '', redirectTo: '/category/5f0cc0310280f43c8aa6c3ba', pathMatch: 'full'},
    {path: ':id', component: SubcategoryListComponent }
  ]},
  { path: 'search', component: SearchPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'subcategory-details/:category/:subcategory/:id', component: SubcategoryDetailsComponent },
  { path: 'product-details/:product_id', component: ProductDetailsComponent },
  { path: 'product-create', component: ProductCreateComponent, canActivate: [AuthGuard]},
  { path: 'preview', component: ProductPreviewComponent },
  { path: 'personal/:email', component: PersonalPageComponent, children: [
    {path: '', component: PersonalAdsComponent},
    {path: 'settings', component: PersonalSettingsComponent}
  ]},
  { path: 'admin', component: AdminComponent,canActivate: [AdminGuard], children: [
    {path: '', component: AdminProductsComponent},
    {path: 'categories', component: AdminCategoriesComponent},
    {path: 'subcategories', component: AdminSubcategoriesComponent},
    {path: 'groups', component: AdminGroupsComponent},
    {path: 'cities', component: AdminCitiesComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
