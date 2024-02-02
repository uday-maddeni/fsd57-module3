import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowempbyidComponent } from './showempbyid/showempbyid.component';
import { ProductsComponent } from './products/products.component';
import { LogoutComponent } from './logout/logout.component';
import { EmployeeComponent } from './employee/employee.component';
import { authGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [
  {path:'',            component:LoginComponent},
  {path:'login',       component:LoginComponent},
  {path:'register',    component:RegisterComponent},
  {path:'showemps',    canActivate:[authGuard], component:EmployeeComponent},
  {path:'showempbyid', canActivate:[authGuard], component:ShowempbyidComponent},
  {path:'products',    canActivate:[authGuard], component:ProductsComponent},
  {path:'cart',        canActivate:[authGuard], component:CartComponent},
  {path:'logout',      canActivate:[authGuard], component:LogoutComponent},
  {path:'product-info',canActivate:[authGuard], component:ProductInfoComponent},
  {path:'image',       canActivate:[authGuard], component:ImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
