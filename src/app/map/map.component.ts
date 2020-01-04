import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @Output() onClick = new EventEmitter<boolean>();
    setHide(){
       this.onHide.emit(true);
    }
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
    this.map.on('click', function(e){
      var coord = e.latlng;
      var lat = coord.lat;
      var lng = coord.lng;
      console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
      });
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 3.8684,11.5006],
      zoom: 8
    });
  }
  
  
}