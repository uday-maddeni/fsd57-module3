import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  marsObjects: any = [];

  flag : boolean = false;
  btnData : string = 'table';

  getMarsObjs() : void {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(response => response.json())
    .then(data => {
      this.marsObjects = data;
    })
  }

  toggle() : void {
    if(this.flag == false){
      this.flag = (!this.flag);
      this.btnData = 'cards';
    } else {
      this.flag = (!this.flag);
      this.btnData = 'table';
    }
  }

}
