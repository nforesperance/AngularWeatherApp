import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { ServeService } from './services/serve.service';
import { DayComponent } from './weather/day/day.component';
import {DarkwComponent } from './darkw/darkw.component';
import {DarkdComponent } from './darkw/darkd/darkd.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    DayComponent,
    DarkdComponent,
    DarkwComponent,
    HomeComponent,
    NavbarComponent,
    LoginFormComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
