import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PaymentComponent } from './payment/payment.component';
import { FrontComponent } from './front/front.component';


const routes: Routes = [
  {path: '', component:FrontComponent},
  {path: 'home', component:HomeComponent},
  {path: 'Login', component:LoginComponent},
  {path:'Registration', component:RegistrationComponent},
  {path: 'Payment', component:PaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
