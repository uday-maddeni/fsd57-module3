import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  products: any[];  // Change type to array

  constructor(private service: EmpService, private router : Router) {
    this.products = [];
  }

  ngOnInit() {
    const storedItems = localStorage.getItem("singleItem");
    if (storedItems) {
      this.products = JSON.parse(storedItems);
    }
  }

  addToCart(product: any) {
    // Cart using Service
    this.service.addToCart(product);
    this.router.navigate(['products']);
  }
}

