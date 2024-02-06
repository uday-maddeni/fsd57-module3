
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  emp: any;
  captcha1: any;
  randomNumber: number = 0;

  constructor(
    private router: Router,
    private service: EmpService,
    private toastr :ToastrService
  ) {}

  ngOnInit() {
    this.captcha1 = this.getRandomInt(100000, 999999);
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generate() {
    this.captcha1 = this.getRandomInt(100000, 999999);
  }

  async loginSubmit(loginForm: any) {
    if (loginForm.captcha === this.captcha1) {
      if (loginForm.emailId == 'HR' && loginForm.password == 'HR') {
        this.service.setIsUserLoggedIn();
        localStorage.setItem('emailId', loginForm.emailId);
        this.router.navigate(['showemps']);
      } else {
        this.emp = null;

        await this.service
          .employeeLogin(loginForm.emailId, loginForm.password)
          .then((data: any) => {
            console.log(data);
            this.emp = data;
          });

        if (this.emp != null) {
          this.service.setIsUserLoggedIn();
          localStorage.setItem('emailId', loginForm.emailId);
          this.router.navigate(['products']);
        } else {
          alert('Invalid Credentials');
        }
      }
    } else {
     this.toastr.error('Invalid captcha');
    }
  }
}
