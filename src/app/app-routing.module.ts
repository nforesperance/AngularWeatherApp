import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  { path: "login", component: LoginFormComponent },
  { path: "home", component: HomeComponent },
  { path: "signup", component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
