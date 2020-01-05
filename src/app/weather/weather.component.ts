import { Component,Inject, OnInit,AfterViewInit,Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit,AfterViewInit {
  @Input('cord') public jsonWeather
  public response;
	public desc 
	public id 
  public temp
  public tempFaren 
  public humidity 
  public windSpeed 
  public visibility 
  public sunSet 
  public currentDate 
  public timeNow 
  public dayNight 
  public icon
  public name 
  constructor() { }
  ngOnInit(){
    console.log(this.jsonWeather);
    
    this.desc = this.jsonWeather.weather[0].description;
    this.desc = this.desc[0].toUpperCase() + this.desc.slice(1)
   this.id = this.jsonWeather.weather[0].id;
   let number = (this.jsonWeather.main.temp)-273
   this.temp =  Math.round( number * 10 ) / 10;
   this.tempFaren = Math.round(1.8 * (this.temp - 273) + 32)
   this.humidity = this.jsonWeather.main.humidity;
   this.windSpeed = this.jsonWeather.wind.speed; 
   this.visibility = Math.round(this.jsonWeather.visibility / 1000);
   this.sunSet = this.jsonWeather.sys.sunset;
   this.currentDate = new Date();
   this.timeNow = Math.round(this.currentDate / 1000);
   this.dayNight = (this.timeNow < this.sunSet) ? "day" : "night";
    this.name = this.jsonWeather.name 
    this.icon =`${this.dayNight}-${this.id}`
  }
  ngAfterViewInit() {  
  
  }  

}
