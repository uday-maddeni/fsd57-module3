import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  countries : any;

  constructor(private service : EmpService) {

  }

  ngOnInit() {
    this.service.getAllCountries().subscribe((data : any) => {
      this.countries = data;
      console.log(data);
    });
  }
 

  registerSubmit(regForm: any) {
    console.log(regForm);
  }

}