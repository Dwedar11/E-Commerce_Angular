import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { authGuard } from './auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", canActivate: [authGuard], component: HomeComponent },
  { path: "productdetails/:id", canActivate: [authGuard], component: ProductdetailsComponent },
  { path: "cart", canActivate: [authGuard], component: CartComponent },
  { path: "checkout", canActivate: [authGuard], component: CheckoutComponent },
  { path: "product", canActivate: [authGuard], component: ProductComponent },
  { path: "brand", canActivate: [authGuard], component: BrandsComponent },
  { path: "category", canActivate: [authGuard], component: CategoryComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: NotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
