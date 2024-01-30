import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowempbyidComponent } from './showempbyid/showempbyid.component';
import { ProductsComponent } from './products/products.component';
import { LogoutComponent } from './logout/logout.component';
import { EmployeeComponent } from './employee/employee.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'',            component:LoginComponent},
  {path:'login',       component:LoginComponent},
  {path:'register',    component:RegisterComponent},
  {path:'showemps',    canActivate:[authGuard], component:EmployeeComponent},
  {path:'showempbyid', canActivate:[authGuard], component:ShowempbyidComponent},
  {path:'products',    canActivate:[authGuard], component:ProductsComponent},
  {path:'logout',      canActivate:[authGuard], component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
