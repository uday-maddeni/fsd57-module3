import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  emailId: any;
  password: any;

  employees: any;
  emp: any;
  
  //dependency injection
  constructor(private router : Router, private toastr : ToastrService) {
    this.employees = [
      {
        empId: 101,
        empName: 'Rakesh Reddy',
        salary: 50000,
        gender: 'Male',
        dateOfJoining: '2022-01-01',
        country: 'India',
        emailId: 'rakeshreddy@gmail.com',
        password: 'password1',
      },
      {
        empId: 102,
        empName: 'Ranjith',
        salary: 60000,
        gender: 'Male',
        dateOfJoining: '2022-02-15',
        country: 'India',
        emailId: 'ranjith@gmail.com',
        password: 'password2',
      },
      {
        empId: 103,
        empName: 'M. Uday',
        salary: 55000,
        gender: 'Male',
        dateOfJoining: '2022-03-10',
        country: 'India',
        emailId: 'uday@gmail.com',
        password: 'password3',
      },
      {
        empId: 104,
        empName: 'Karthikeya',
        salary: 70000,
        gender: 'Male',
        dateOfJoining: '2022-04-20',
        country: 'India',
        emailId: 'Karthikeya@gmail.com',
        password: 'password4',
      },
      {
        empId: 105,
        empName: 'Rajesh',
        salary: 80000,
        gender: 'Male',
        dateOfJoining: '2022-05-05',
        country: 'India',
        emailId: 'rajesh@gmail.com',
        password: 'password5',
      }
    
    ];
  }

  ngOnInit(){
  }
  

  loginSubmit(loginForm: any) {
   
    if (loginForm.emailId == 'HR' && loginForm.password == 'HR') {
      localStorage.setItem("emailId", loginForm.emailId);
      this.toastr.success('Admin login success');
      this.router.navigate(['showemps']);
    } else {

      this.emp = null;

      this.employees.forEach((element: any) => {
        if (element.emailId == loginForm.emailId && element.password == loginForm.password) {
          this.emp = element;
        }
      });

      if (this.emp != null) {
        localStorage.setItem("emailId", loginForm.emailId);
        this.toastr.success('User login success');
        this.router.navigate(['products']);
      } else {
        this.toastr.error('Login Failed ?');
      }

    }

  }

}
