import { Component } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {
  cartItems = [
    {id: 1, name:"Product A",img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/img-catemac-1.png",quantity: 2, price: 200},
    {id: 2, name:"Product B",img:"https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/img-catemac-1.png",quantity: 2, price: 200}
  ]

  total = 0;
  totalItem(item: any){ 
      this.total = this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  }
}
