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
  showmap: boolean = false;
  res;
  private  appid = "appid=8e1880f460a20463565be25bc573bdc6";
  public response
  loading = false;
  load1 = false
  constructor(
    private http: HttpClient, private _serve:ServeService
  ){}
  ngOnInit(){
    this._serve.getPosition().then(pos=> {
        this.getWeather(pos)
      });
  }
  getWeather(event){
    // this.loading = false
    //    let url1 = `http://api.openweathermap.org/data/2.5/weather?lat=${event.lat}&lon=${event.lng}&${this.appid}`;
    //    let url2 = `http://api.openweathermap.org/data/2.5/forecast?lat=${event.lat}&lon=${event.lng}&${this.appid}`;
    // let url3 =url1
    // this.http.get(url1).toPromise()
    //   .then(current =>{
    //     this.http.get(url2).toPromise()
    //       .then(day =>{
    //               this.response = {current:current,day:day}   
    //               console.log(this.response);
                   
    //               this.showmap = false  
    //               this.loading = false;
    //               this.load1 = false  
    //       })
    //       .catch(err =>{
    //         console.log("error");       
    //       })  
    //   })
    //   .catch(err =>{
    //     console.log("error");       
    //   })
  }
}
