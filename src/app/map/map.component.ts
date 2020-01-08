import { AfterViewInit,Output, EventEmitter,Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @Output() public mapEvent = new EventEmitter();
  private map;
  private tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
     });
  
     
  constructor() {
   }

  ngAfterViewInit(): void {
    this.initMap()
    this.tiles.addTo(this.map);
    this.map.on('click', e =>{
      let coord = e.latlng;
      let lat = coord.lat;
      let lng = coord.lng;
      this.mapEvent.emit({lat:lat,lng:lng,showmap:false})
      });
    
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 3.8684,11.5006],
      zoom: 8
    });
  }
  
  
}