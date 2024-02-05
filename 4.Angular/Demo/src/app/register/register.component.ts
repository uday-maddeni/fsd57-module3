import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  
  countries: any;
  departments: any;
  emp: any;

  constructor(private service: EmpService, private router: Router) {
    this.emp = {
      empName:'',
      salary:'',
      gender:'',
      doj:'',
      country:'',
      emailId:'',
      password:'',
      department: {
        deptId:''
      },
      otp:0
    };
  }

  ngOnInit() {
    this.service.getAllCountries().subscribe((data: any) => {this.countries = data;});
    this.service.getAllDepartments().subscribe((data: any) => {this.departments = data;});
  }
 

  registerSubmit(regForm: any) {
    console.log(regForm);

    this.emp.empName = regForm.empName;
    this.emp.salary = regForm.salary;
    this.emp.gender = regForm.gender;
    this.emp.doj = regForm.doj;
    this.emp.country = regForm.country;
    this.emp.phoneNumber = regForm.phoneNumber;
    this.emp.emailId = regForm.emailId;
    this.emp.password = regForm.password;
    this.emp.department.deptId = regForm.department;

    console.log(this.emp);

    this.service.regsiterEmployee(this.emp).subscribe((data: any) => {console.log(data);});

    this.router.navigate(['login']);
  }

}

