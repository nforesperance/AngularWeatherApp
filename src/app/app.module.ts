import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { ServeService } from './services/serve.service';
import { DayComponent } from './weather/day/day.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatAutocompleteModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    DayComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [ServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
