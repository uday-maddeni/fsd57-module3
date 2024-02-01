import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  localStorageData: any;
  emailId: any;
  products: any;

  constructor(private service: EmpService, private router: Router) {
    this.emailId = localStorage.getItem('emailId');
    this.products = service.getCartItems();
  }

  ngOnInit() {
  }

  goToProducts() {
    this.deleteAllProducts();
    this.service.clearCart(); // Clear the cart in the service
    this.service.cartChanged.emit(); // Emit the event to update the header
    this.router.navigate(['products']);
  }

  calculateTotal(): number {
    let total = 0;
    for (const product of this.products) {
      total += product.price;
    }
    return total;
  }

  deleteAllProducts() {
    this.service.setCartItems([]); // Set the cart items to an empty array
  }

  deleteProduct(product: any) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.service.setCartItems(this.products); // Update the cart items in the service
      this.service.cartChanged.emit(); // Emit the event to update the header
    }
  }
}

