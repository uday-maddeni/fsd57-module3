import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  employees: any[] = [
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

  ngOnInit() {
  }

}
