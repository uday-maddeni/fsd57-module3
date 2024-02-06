import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  isUserLoggedIn: boolean;

  cartItems: any;

  // Declare an event emitter for cart changes
  cartChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
    this.cartItems = [];
  }

  getAllCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getAllEmployees(): any {
    return this.http.get('http://localhost:8085/getEmployees');
  }

  getAllDepartments(): any {
    return this.http.get('http://localhost:8085/getDepartments');
  }

  getEmployeeById(empId : any): any {
    return this.http.get('http://localhost:8085/getEmployeeById/'+empId);
  }

  regsiterEmployee(employee: any): any {
    return this.http.post('http://localhost:8085/addEmployee', employee);
  }

  employeeLogin(emailId: any, password: any): any {
    return this.http.get('http://localhost:8085/empLogin/' + emailId + '/' + password).toPromise();
  }

  deleteEmployee(empId: any) {
    return this.http.delete('http://localhost:8085/deleteEmployeeById/' + empId);
  }

  updateEmployee(employee: any) {
    return this.http.put('http://localhost:8085/updateEmployee', employee);
  }

  //Login
  setIsUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getIsUserLogged(): boolean {
    return this.isUserLoggedIn;
  }

  addToCart(product: any) {
    this.cartItems.push(product);
    this.cartChanged.emit(); // Emit the event when the cart is updated
  }

  //Cart using Service
  getCartItems(): any {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }

  setCartItems(count: any) {
    this.cartItems = count;
  }

  //Logout
  setIsUserLoggedOut() {
    this.isUserLoggedIn = false;
  }
}
