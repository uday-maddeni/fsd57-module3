import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  emailId : any;

  ngOnInit(){
  }
  
  constructor(private router : Router, private toastr : ToastrService, private service : EmpService){
    this.emailId = localStorage.getItem('emailId');
    this.toastr.success(this.emailId+' is Logout');
    localStorage.removeItem('emailId');
    localStorage.clear();
    service.setIsUserLoggedOut();
    this.emailId = localStorage.getItem('emailId');
    this.router.navigate(['login']);
  }

}
