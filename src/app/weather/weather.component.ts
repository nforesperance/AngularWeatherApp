import { Component,Inject, OnInit,AfterViewInit,Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements AfterViewInit {
  @Input('cord') public cordinates

  constructor() { }

  ngAfterViewInit() {
    console.log(this.cordinates["lat"]);
    
  }

}
