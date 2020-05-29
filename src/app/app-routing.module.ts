import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubhashComponent } from './subhash/subhash.component';
import { ShivamComponent } from './shivam/shivam.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path: 'shivam' , component: ShivamComponent},
  {path: 'subhash' , component: SubhashComponent},
  {path: 'login' , component: LoginComponent},
  {path:'signup',component:SignupComponent},
  { path: '',   redirectTo: '/subhash', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
