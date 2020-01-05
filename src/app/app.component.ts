import { Component} from '@angular/core';
import {ServeService} from './services/serve.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-weather-app';
  showmap: boolean = false;
  res;
  private cord
  private lat = 45
  private lon = 56
  public cordinates ={
   lat:this.lat,
    lon:this.lon
  }
  constructor(
    private serve:ServeService
  ){}
  getWeather(event){
    this.res = this.serve.getWeather(event.lat,event.lon)
    console.log(this.res);
    
  }
}
