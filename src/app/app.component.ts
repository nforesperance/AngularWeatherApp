import { Component, OnInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ServeService } from './services/serve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-weather-app';
  showmap: boolean = false;
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
        this.getWeather1(pos)
        this.getWeather(pos)
        
      });
  }
  getWeather(event){
    this.loading = true
       let url1 = `http://api.openweathermap.org/data/2.5/weather?lat=${event.lat}&lon=${event.lng}&${this.appid}`;
       let url2 = `http://api.openweathermap.org/data/2.5/forecast?lat=${event.lat}&lon=${event.lng}&${this.appid}`;
    let url3 =url1
    this.http.get(url1).toPromise()
      .then(current =>{
        this.http.get(url2).toPromise()
          .then(day =>{
                  this.response = {current:current,days:day}   
                  console.log(this.response);
                   
                  this.showmap = false  
                  this.loading = false;
                  this.load1 = false;
                
          })
          .catch(err =>{
            console.log("error");       
          })  
      })
      .catch(err =>{
        console.log("error");       
      })
  }
  getWeather1(event){
    this.loading = true
       let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/0207b907a2bb4c9fa5065494935d5dda/${event.lat},${event.lng},1578264330?exclude=flags`;
     return this.http.get(url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*"
      }),
    }).toPromise()
    .then(data =>{
      console.log(data)     
    })
    .catch(err =>console.log(err)
    )
  }
}
