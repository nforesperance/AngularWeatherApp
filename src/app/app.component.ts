import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-weather-app';
  showmap: boolean = false;
  private cord
  private lat = 45
  private lon = 56
  public cordinates ={
   lat:this.lat,
    lon:this.lon
  }
  getWeather(event){
    console.log(event.lat);   
  }
}
