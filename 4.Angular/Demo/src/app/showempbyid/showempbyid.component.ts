
import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-showempbyid',
  templateUrl: './showempbyid.component.html',
  styleUrl: './showempbyid.component.css'
})
export class ShowempbyidComponent implements OnInit {
  
  empId: any;
  emp: any;

  constructor(private service :EmpService) {
  }

  ngOnInit() {
  }

  getEmpById(emp: any) {
    this.service.getEmployeeById(emp.empId).subscribe((data: any) => {this.emp = data;});
  }  
  

}