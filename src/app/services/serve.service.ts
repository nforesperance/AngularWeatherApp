import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServeService {
  private  appid = "appid=8e1880f460a20463565be25bc573bdc6";
  private response
  
  constructor(
    private http: HttpClient
  ) { }
  getWeather(lat:Number,lon:Number) {   
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&${this.appid}`;
    this.http.get(url).toPromise()
      .then(data =>{
        console.log(data)        
      })
      .catch(err =>{
        console.log("error");       
      })
   }
  searchWeatherInfo(city: string) {
    const APPID = '7a211c68435846ab04153a9d815b09f3';
    
}
}
