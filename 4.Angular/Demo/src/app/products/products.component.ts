import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] 
  //styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  
  products: any;
  emailId : any;

  cartProducts : any;

  constructor(private service: EmpService, private router : Router) {
    this.emailId = localStorage.getItem('emailId');
    this.products = [
      {id:1001, name:"Art1",   price:14999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/art1.jpg"},
      {id:1002, name:"Art2", price:24999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/art2.jpg"},
      {id:1003, name:"Art3",  price:34999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/art3.jpg"},
      {id:1004, name:"Art4",  price:44999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/art4.jpg"},
      {id:1005, name:"Art5",    price:54999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/art5.jpg"},
      {id:1006, name:"Art6",    price:64999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/art6.jpg"}
    ];
  }

  ngOnInit() {
  }

  addToCart(product: any) {
    const isData = localStorage.getItem("singleItem");
    if(isData == null){
      const newArr = [];
      newArr.push(product);
      localStorage.setItem("singleItem", JSON.stringify(newArr));
    } else {
      //const oldData = JSON.parse(isData);
      localStorage.removeItem("singleItem");
      const newArr = [];
      newArr.push(product);
      localStorage.setItem("singleItem", JSON.stringify(newArr));
    }

    this.router.navigate(['product-info']);

  }

}
