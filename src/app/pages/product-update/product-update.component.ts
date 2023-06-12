import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-product-update',
    templateUrl: './product-update.component.html',
    styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent {
    categories: ICategory[] = [];
    product!: IProduct;
    productForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        price: [0],
        img: ['', [Validators.required]],
        description: ['', [Validators.required]],
        category: ['', [Validators.required]],
    })

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: Router,
        private categoryService: CategoryService
    ) {

        this.route.paramMap.subscribe(param => {
            const id = this.route.snapshot.params['id'];
            this.productService.getProductById(id).subscribe(product => {
                this.product = product;
                // set giá trị từ API vào input form
                this.productForm.patchValue({
                    name: this.product.name,
                    price: this.product.price,
                    img: this.product.img,
                    description: this.product.description,
                    category: (this.product.categoryId as any)?._id,
                });
            }, error => console.log(error.message));
            this.categoryService.getCategories().subscribe(
                (data) => {
                    this.categories = data;
                },
                (error) => {
                    console.log(error.message);
                }
            );
        })
    }

    onHandleUpdate() {
        // kiểm tra nếu form hợp lệ
        if (this.productForm.valid) {
            const newProduct: IProduct = {
                _id: this.product._id,
                name: this.productForm.value.name || "",
                img: this.productForm.value.img || "",
                price: this.productForm.value.price || 0,
                description: this.productForm.value.description || "",
                categoryId: this.productForm.value.category || "",
            }
            console.log(newProduct);

            this.productService.updateProduct(newProduct).subscribe(product => {
                alert("Cập nhật sản phẩm thành công")
                this.router.navigate(['/admin/product']);
            })
        }
    }
}
