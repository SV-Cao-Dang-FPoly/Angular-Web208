import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { IProduct } from 'src/app/interfaces/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
    products: IProduct[] = [];
    categories: ICategory[] = [];

    constructor(private productService: ProductService,
        private categoryService: CategoryService) {
        this.fetchProducts();
        this.fetchCategories();
    }

    fetchProducts() {
        this.productService.getProducts().subscribe(data => {

            this.products = data.slice(0, 4);
        }, error => {
            console.log(error.message);
        });
    }

    fetchCategories() {
        this.categoryService.getCategories().subscribe(data => {
            this.categories = data.slice(0, 6);
        }, error => {
            console.log(error.message)
        })
    }
}
