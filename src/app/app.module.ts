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
import { DarkdComponent } from './darkw/darkd/darkd.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { SearchComponent } from './search/search.component';
import { ProfilComponent } from './profil/profil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatAutocompleteModule, MatInputModule, MatSnackBarModule } from '@angular/material';
=======
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxIndexedDBModule ,DBConfig} from 'ngx-indexed-db';
import { SearchComponent } from './search/Search.component';
import { ProfilComponent } from './profil/profil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatAutocompleteModule, MatInputModule, MatSnackBarModule } from '@angular/material';
>>>>>>> ajout de profil

const dbConfig: DBConfig = {
  name: 'Users',
  version: 1,
  objectStoresMeta: [{
    store: 'Users',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'username', keypath: 'username', options: { unique: true } },
      { name: 'password', keypath: 'password', options: { unique: true } },
      { name: 'image', keypath: 'image', options: { unique: false } },
      { name: 'sexe', keypath: 'sexe', options: { unique: false } },
      { name: 'birthday', keypath: 'birthday', options: { unique: false } }
    ]
  }]
};

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
    SignupComponent,
<<<<<<< HEAD
    SearchComponent
=======
    ProfilComponent
>>>>>>> ajout de profil
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxIndexedDBModule.forRoot(dbConfig),
<<<<<<< HEAD
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
=======
    BrowserAnimationsModule,
>>>>>>> ajout de profil
  ],
  providers: [ServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
