import { Component, OnInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ServeService } from '../services/serve.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'angular-weather-app';
  showmap: boolean = false;
  res;
  private  appid = "appid=8e1880f460a20463565be25bc573bdc6";
  public response
  loading = false;
  load1 = true
  
  //fordark
   urls = [];
   allData;
  constructor(
    private http: HttpClient, private _serve:ServeService
  ){}
  ngOnInit(){
    this._serve.getPosition().then(pos=> {
        this.getWeather(pos)
        
      });
  }
  getData(url){
    return new Promise((resolve,reject)=>{
      this.http.get(url).toPromise()
      .then(data =>{
        resolve(data)
      })
    })
  }
  loadData(){
    let Requests =[]
    this.urls.forEach( url =>{
      Requests.push(this.getData(url))
    })
    Promise.all(Requests)
    .then(data =>{
      console.log(data)
      this.allData = data 
      this.response = {current:data[data.length-2],days:data[data.length-1]}  
        console.log(this.response);
        
      this.showmap = false  
      this.loading = false;
      this.load1 = false;
    })
    .catch(err =>{
      console.log(err)
      
    })
  }
  getWeather(pos){
    this.loading = true
    let urls =[]
    let current = `http://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lng}&${this.appid}`;
    let url2 = `http://api.openweathermap.org/data/2.5/forecast?lat=${pos.lat}&lon=${pos.lng}&${this.appid}`;
    urls.push(current)
    urls.push(url2)
    this.urls = urls
    this.loadData()
  }
} 
