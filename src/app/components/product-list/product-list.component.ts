import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
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

  constructor(
    private productService: ProductService
  ) {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products =  data.reverse();
    }, error => {
      console.log(error.message);
    });
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

  searchProducts() {
    const filteredProducts = this.products.filter(product => {
      return product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
    return filteredProducts;
  }

}
