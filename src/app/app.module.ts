import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { WeatherComponent } from './weather/weather.component';
import { ServeService } from './services/serve.service';
import { DayComponent } from './weather/day/day.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { NgxIndexedDBModule ,DBConfig} from 'ngx-indexed-db';

const dbConfig: DBConfig  = {
  name: 'Users',
  version: 1,
  objectStoresMeta: [{
    store: 'Users',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'username', keypath: 'username', options: { unique: true }},
      { name: 'password', keypath: 'password', options: { unique: true } },
      { name: 'image', keypath: 'image', options: { unique: false } }
    
    ]
  }]
};



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    DayComponent,
    LoginFormComponent,
    HomeComponent,
    SignupComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxIndexedDBModule.forRoot(dbConfig),
   
  ],
  providers: [ServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
