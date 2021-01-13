import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ServicesComponent } from './services/services.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  // {path: '', component: LoginPageComponent},
  // {path: 'home', component: VehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
