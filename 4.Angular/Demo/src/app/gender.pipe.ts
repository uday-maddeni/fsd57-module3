import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(name: any, gender: any): any {
    if(gender === "Male")return 'MR. '+ name;
    else if(gender === "Female")return 'MISS. '+ name;
    else return gender;
  }

}
