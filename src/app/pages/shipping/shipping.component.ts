import { Component } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent {
  selectedPayment: string = 'COD';

  onSubmit() {
    // Xử lý submit form tại đây
  }
}
