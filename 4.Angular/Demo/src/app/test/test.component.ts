import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {

  public id:number;
  public name:string;
  public avg:number;

  public address:any;

  public hobbies:any;

  constructor() {
    //alert("Constructor is invoked");
    this.id = 101;
    this.name = 'Uday';
    this.avg = 99.99;

    this.address = {
      streetno : 294,
      city : 'Hyderabad',
      state : 'Telangana'
    };

    this.hobbies = ['Comming','Wasting','Going'];
  }

  ngOnInit() {
    //alert("ngOnInit is invoked");
  }

}
