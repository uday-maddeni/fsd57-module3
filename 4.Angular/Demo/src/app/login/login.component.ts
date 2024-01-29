import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  emailId: any;
  password: any;

  constructor() {
  }

  ngOnInit(){
  }

  submit() {
    console.log("EmailId : " + this.emailId);
    console.log("Password: " + this.password);
  }

  loginSubmit(loginForm: any) {
    console.log(loginForm);

    console.log("EmailId : " + loginForm.emailId);
    console.log("Password: " + loginForm.password);
  }

}
