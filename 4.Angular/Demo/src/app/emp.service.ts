import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  
  isUserLoggedIn: boolean;

  constructor() { 
    this.isUserLoggedIn = false;
  }

  //Login
  setIsUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getIsUserLogged(): boolean {
    return this.isUserLoggedIn;
  }

  //Logout
  setIsUserLoggedOut() {
    this.isUserLoggedIn = false;
  }
}
