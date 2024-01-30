import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  
  isUserLoggedIn: boolean;

  constructor(private http : HttpClient) { 
    this.isUserLoggedIn = false;
  }

  getAllCountries() : any {
    return this.http.get('https://restcountries.com/v3.1/all');
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
