import { Component } from '@angular/core';
import { OrderService } from '../../../shared/services/order-service.service';

@Component({
  selector: 'app-checkout',


  templateUrl: './checkout-component.component.html',
  styleUrl: './checkout-component.component.scss'
})
export class CheckoutComponent {

  cartId: string = 'your-cart-id'; // You should dynamically fetch the user's cartId
  shippingAddress = {
    details: '',
    phone: '',
    city: ''
  };

  constructor(private _orderService: OrderService) {}

  placeCodOrder(): void {
    this._orderService.createCodOrder(this.cartId, this.shippingAddress).subscribe({
      next: (response) => {
        console.log('Order placed:', response);
        // Redirect user to a success page or show confirmation
      },
      error: (error) => {
        console.error('Error placing order:', error);
      }
    });
  }

  createCheckoutSession(): void {
    this._orderService.createCheckoutSession(this.cartId).subscribe({
      next: (response) => {
        console.log('Checkout session:', response);
        window.location.href = response.session.url; // Redirect to payment gateway
      },
      error: (error) => {
        console.error('Error creating checkout session:', error);
      }
    });
  }
}











