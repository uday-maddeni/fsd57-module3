import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
    
  constructor() {
  }

  ngOnInit() {
  }
 

  registerSubmit(regForm: any) {
    console.log(regForm);
  }

}