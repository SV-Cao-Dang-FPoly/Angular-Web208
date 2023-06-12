import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/Product';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
    categories: ICategory[] = [];

    productForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        price: [0],
        img: ['', [Validators.required]],
        description: ['', [Validators.required]],
        category: ['', [Validators.required]],
    })

    constructor(
        private productService: ProductService,
        private categoryService: CategoryService,
        private router: Router,
        private formBuilder: FormBuilder) {
        this.categoryService.getCategories().subscribe(
            (data) => {
                this.categories = data;
            },
            (error) => {
                console.log(error.message);
            }
        );
    }

    onHandleAdd() {
        if (this.productForm.valid) {
            const product: IProduct = {
                name: this.productForm.value.name || "",
                price: this.productForm.value.price || 0,
                img: this.productForm.value.img || "",
                description: this.productForm.value.description || "",
                categoryId: this.productForm.value.category || "",
            }
            this.productService.addProduct(product).subscribe(product => {
                console.log('Thành công', product);
                this.router.navigate(['/admin/product']);
            })
        }


    }

}
