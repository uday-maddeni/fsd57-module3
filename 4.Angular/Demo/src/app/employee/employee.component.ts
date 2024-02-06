
import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

declare var jQuery: any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any;
  emailId:any;
  countries :any;
  departments: any;
  editEmp:any;

  constructor(private service: EmpService) {
    this.emailId = localStorage.getItem('emailId');

    //for 2-way databinding with dialog box
    this.editEmp = {
      empId: '',
      empName: '',
      salary: '',
      gender: '',
      doj: '',
      country: '',
      emailId: '',
      password: '',
      department: {
        deptId: ''
      }
    };
  }

  ngOnInit() {
    this.service.getAllEmployees().subscribe((data : any)=>{console.log(data);this.employees = data;});
    this.service.getAllCountries().subscribe((data: any) => { this.countries = data; });
    this.service.getAllDepartments().subscribe((data: any) => { this.departments = data; });
  }

  editEmployee(emp: any) {
    console.log(emp);

    //Employee data binding to the editEmp variable for 2-way databinding
    this.editEmp = emp;

    //Launching the Modal Dialog Box
    jQuery('#myModal').modal('show');
  }

  updateEmployee() {
    console.log(this.editEmp);
    this.service.updateEmployee(this.editEmp).subscribe((data: any) => { console.log(data); });
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

