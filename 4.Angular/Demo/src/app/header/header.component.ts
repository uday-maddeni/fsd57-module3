import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItems: any;
  loginStatus : any;
  constructor(private service: EmpService) {
    this.cartItems = service.getCartItems();
  }

  ngOnInit() {
    // Listen for the cartChanged event
    this.service.cartChanged.subscribe(() => {
      this.cartItems = this.service.getCartItems();
    });


    this.service.getLoginStatus().subscribe((data: any) => {
      this.loginStatus = data;
    });
  }
}




// import { Component, OnInit } from '@angular/core';
// import { EmpService } from '../emp.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent implements OnInit {

//   loginStatus: any;

//   constructor(private service: EmpService) {
//   }

//   ngOnInit() {
//     this.service.getLoginStatus().subscribe((data: any) => {
//       this.loginStatus = data;
//     });
//   }

// }

