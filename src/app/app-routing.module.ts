import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';

import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ProductCartComponent } from './pages/product-cart/product-cart.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryAddComponent } from './pages/category-add/category-add.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';

const routes: Routes = [
    {
        path: "", component: BaseLayoutComponent, children: [
            { path: "", component: HomePageComponent },
            { path: "list-product", component: ProductListPageComponent },
            { path: "about", component: AboutPageComponent },
            { path: "cart", component: ProductCartComponent },
            { path: "shipping", component: ShippingComponent },
            { path: "product/:id", component: ProductDetailComponent }
        ]
    },
    {
        path: "admin", component: AdminLayoutComponent, children: [
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
            { path: "dashboard", component: DashboardComponent },
            { path: "product", component: ProductListComponent },
            { path: "product/add", component: ProductAddComponent },
            { path: "product/:id/update", component: ProductUpdateComponent },
            { path: "category", component: CategoryListComponent },
            { path: "category/add", component: CategoryAddComponent },
            { path: "category/:id/edit", component: CategoryEditComponent },
        ]
    },
    {

        path: "signup", component: SignupComponent, children: []
    },
    {
        path: "signin", component: SigninComponent, children: []
    },
    {
        path: "**", component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
