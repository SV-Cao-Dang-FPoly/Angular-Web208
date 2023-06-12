import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
<<<<<<< HEAD
import { ProductCartComponent } from './pages/product-cart/product-cart.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
=======
import { CustomerInformationComponent } from './components/custommer/customer-information/customer-information.component';
import { CustomerUpdateComponent } from './components/custommer/customer-update/customer-update.component';
>>>>>>> 22fae228dbe1bcea6d61a9bf38380a1ef31330d4



@NgModule({
    declarations: [
        AppComponent,
        AdminProductComponent,
        DashboardComponent,
        AboutPageComponent,
        HomePageComponent,
        PageNotFoundComponent,
        ProductAddComponent,
        ProductUpdateComponent,
        ProductDetailComponent,
        AdminLayoutComponent,
        BaseLayoutComponent,
        NavComponent,
        ProductListComponent,
        ProductListPageComponent,
        SigninComponent,
        SignupComponent,
<<<<<<< HEAD
        ProductCartComponent,
        ShippingComponent
=======
        CustomerInformationComponent,
        CustomerUpdateComponent
>>>>>>> 22fae228dbe1bcea6d61a9bf38380a1ef31330d4
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
