import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { IProduct } from 'src/app/interfaces/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    products: IProduct[] = [];
    searchTerm: string = '';
    removedProducts: IProduct[] = [];
    categories: ICategory[] = [];

    constructor(
        private productService: ProductService,
        private categoryService: CategoryService
    ) {
        this.fetchProducts();
        this.fetchCategories();
    }

    // ngOnInit(): void {

    // }

    fetchProducts() {
        this.productService.getProducts().subscribe(data => {
            this.products = data.reverse();
        }, error => {
            console.log(error.message);
        });
    }

    fetchCategories() {
        this.categoryService.getCategories().subscribe(
            (data: ICategory[]) => {
                this.categories = data;
            },
            (error: any) => {
                console.log(error.message);
            }
        );
    }

    removeItem(_id: any) {
        if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
            this.productService.deleteProduct(_id).subscribe(() => {
                console.log("Xóa thành công");
                const removedProduct = this.products.find(product => product._id === _id);
                if (removedProduct) {
                    this.removedProducts.push(removedProduct);
                    this.products = this.products.filter(product => product._id !== _id);
                }
            });

        }
    }

    searchProducts(): IProduct[] {
        return this.products.filter((product) =>
            product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
    }

}




// import { Component, OnInit } from '@angular/core';
// import { ICategory } from 'src/app/interfaces/Category';
// import { IProduct } from 'src/app/interfaces/Product';
// import { CategoryService } from 'src/app/services/category.service';
// import { ProductService } from 'src/app/services/product.service';

// @Component({
//     selector: 'app-product-list',
//     templateUrl: './product-list.component.html',
//     styleUrls: ['./product-list.component.scss']
// })
// export class ProductListComponent implements OnInit {
//     products: IProduct[] = [];
//     searchTerm: string = '';
//     removedProducts: IProduct[] = [];
//     categories: ICategory[] = [];

//     constructor(
//         private productService: ProductService,
//         private categoryService: CategoryService
//     ) { }

//     ngOnInit(): void {
//         this.fetchProducts();
//         this.fetchCategories();
//     }

//     fetchProducts(): void {
//         this.productService.getProducts().subscribe(
//             (data: IProduct[]) => {
//                 this.products = data.reverse();
//             },
//             (error: any) => {
//                 console.log(error.message);
//             }
//         );
//     }

//     fetchCategories(): void {
//         this.categoryService.getCategories().subscribe(
//             (data: ICategory[]) => {
//                 this.categories = data;
//             },
//             (error: any) => {
//                 console.log(error.message);
//             }
//         );
//     }

//     removeItem(_id: any): void {
//         if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
//             this.productService.deleteProduct(_id).subscribe(() => {
//                 console.log('Xóa thành công');
//                 const removedProduct = this.products.find((product) => product._id === _id);
//                 if (removedProduct) {
//                     this.removedProducts.push(removedProduct);
//                     this.products = this.products.filter((product) => product._id !== _id);
//                 }
//             });
//         }
//     }

//     searchProducts(): IProduct[] {
//         return this.products.filter((product) =>
//             product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
//         );
//     }
// }
