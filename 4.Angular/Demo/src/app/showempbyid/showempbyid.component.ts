import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showempbyid',
  templateUrl: './showempbyid.component.html',
  styleUrl: './showempbyid.component.css'
})
export class ShowempbyidComponent implements OnInit {
  
  employees: any;
  empId: any;
  emp: any;
  flag: string = 'empty';

  constructor() {
    this.employees = [
      {empId: 101, empName:'Harsha', salary:1212.12, gender:'Male',   doj:'2018-11-15', country:'India',    emailId:'harsha@gmail.com', password:'123'},
      {empId: 102, empName:'Pasha',  salary:2323.23, gender:'Male',   doj:'2017-10-16', country:'China',    emailId:'pasha@gmail.com',  password:'123'},
      {empId: 103, empName:'Indira', salary:3434.34, gender:'Female', doj:'2016-09-17', country:'USA',      emailId:'indira@gmail.com', password:'123'},
      {empId: 104, empName:'Vamsi',  salary:4545.45, gender:'Male',   doj:'2015-08-18', country:'SriLanka', emailId:'vamsi@gmail.com',  password:'123'},
      {empId: 105, empName:'Venkat', salary:5656.56, gender:'Male',   doj:'2014-07-19', country:'Nepal',    emailId:'venkat@gmail.com', password:'123'}
    ];
  }

  ngOnInit() {
  }

  getEmpById(val: any){
    this.emp = null;
    this.flag = 'empty';
    for(let employ of this.employees){
      if (employ.empId == val.empId) {
        this.emp = employ;
        this.flag = 'find';
        break;
      } 
    }
    if(this.flag === 'empty'){
      this.flag = 'notfind';
    }
  }
}


