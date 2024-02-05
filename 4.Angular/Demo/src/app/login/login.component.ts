import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  emp: any;

  //Dependency Injection for EmpService, Router
  constructor(private router: Router, private service: EmpService) {   
  }

  ngOnInit(){
  }

  async loginSubmit(loginForm: any) {
    if (loginForm.emailId == 'HR' && loginForm.password == 'HR') {           
      //Setting the isUserLoggedIn variable value to true under EmpService
      this.service.setIsUserLoggedIn();
      localStorage.setItem("emailId", loginForm.emailId);
      this.router.navigate(['showemps']);
    } else {
      this.emp = null;

      await this.service.employeeLogin(loginForm.emailId, loginForm.password).then((data: any) => {
        console.log(data);
        this.emp = data;
      });

      if (this.emp != null) {
        this.service.setIsUserLoggedIn();        
        localStorage.setItem("emailId", loginForm.emailId);
        this.router.navigate(['products']);
      } else {
        alert('Invalid Credentials');
      }
    }
  }
}
