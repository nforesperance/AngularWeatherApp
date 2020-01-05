import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServeService } from './services/serve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-weather-app';
  showmap: boolean = true;
  res;
  private  appid = "appid=8e1880f460a20463565be25bc573bdc6";
  public response
  loading = false;
  load1 = true
  constructor(
    private http: HttpClient, private _serve:ServeService
  ){}
  ngOnInit(){
    this._serve.getPosition().then(pos=> {
        this.getWeather(pos)
      });
  }
  getWeather(event){
    this.loading = true
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${event.lat}&lon=${event.lng}&${this.appid}`;
    this.http.get(url).toPromise()
      .then(data =>{
        this.response = data     
        this.showmap = false  
        this.loading = false;
        this.load1 = false    
      })
      .catch(err =>{
        console.log("error");       
      })
  }
}
