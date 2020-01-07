import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { ServeService } from './services/serve.service';
import { DayComponent } from './weather/day/day.component';
import { DarkwComponent } from './darkw/darkw.component';
import {DarkdComponent } from './darkw/darkd/darkd.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    DayComponent,
    DarkwComponent,
    DarkdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
