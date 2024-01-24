import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.css'
})
export class Test2Component implements OnInit {

  person:any;

  constructor(){
    this.person = {
      id : 101,
      name : 'Uday',
      avg : 99.99,
      address : {
        streetno : 42,
        city : 'hyd',
        state : 'tel'
      },
      hobbies : ['comming','wasting','going']
    };
  }

  ngOnInit() {
    //alert("OnInit invoked");
  }

  buttonSubmit() {
    alert("button clicked");
    console.log(this.person);
  }
  
}
