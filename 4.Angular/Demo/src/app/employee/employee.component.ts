import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
declare var jQuery: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  employees : any;
  emailId : any;

  constructor(private service : EmpService){

    this.emailId = localStorage.getItem('emailId');

  }

  ngOnInit() {
    this.service.getAllEmployees().subscribe((data : any) => {
      this.employees = data;
      console.log(data);
    })
  }

  
  editEmployee(emp: any) {
    console.log(emp);

    //2. Launching the Modal Dialog Box
    jQuery('#myModal').modal('show');

  }


  deleteEmployee(emp: any) {
    this.service.deleteEmployee(emp.empId).subscribe((data: any) => {console.log(data);});

    const i = this.employees.findIndex((element: any) => {
      return element.empId == emp.empId;
    });

    this.employees.splice(i, 1);

    alert('Employee Deleted Successfully!!!');
  }

}
