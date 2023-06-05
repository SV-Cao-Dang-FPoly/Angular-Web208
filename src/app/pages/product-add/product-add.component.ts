import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
<<<<<<< HEAD
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    price: [0],
    img: ['', [Validators.required]],
    description: [''],
  })

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder) { }

  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        img: this.productForm.value.img || "",
        description: this.productForm.value.description || "",
      }
      this.productService.addProduct(product).subscribe(product => {
        console.log('Thành công', product)
      })
    }
  }
=======
  
>>>>>>> 073b5d968cad4c90c2a92039f8178d74cbf7b0de
}
