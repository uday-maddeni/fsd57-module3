import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { EmpService } from './emp.service';

export const authGuard: CanActivateFn = (route, state) => {
  let service = inject(EmpService);
  return service.getIsUserLogged();
  //return true;
};
