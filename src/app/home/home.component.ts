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
      this.response = {current:data[data.length-2],days:data[data.length-1],data}  
        console.log(this.response);
        
      this.showmap = false  
      this.loading = false;
      this.load1 = false;
    })
  }
  getWeather(pos){
    this.loading = true
    let today = new Date()
    let day = today.getDay()
    let date = today.getDate()
    let urls =[]
    for (let i = 6; i>=0; i--){
        let dt = today.setDate(6-i)
       let str =  (today.getTime()/1000).toString();
       let time = str.substring(0,str.indexOf("."));     
       let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/0207b907a2bb4c9fa5065494935d5dda/${pos.lat},${pos.lng},${time}?exclude=currently,flags`
       urls.push(url)  
    }
    let current = `http://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lng}&${this.appid}`;
    let url2 = `http://api.openweathermap.org/data/2.5/forecast?lat=${pos.lat}&lon=${pos.lng}&${this.appid}`;
    urls.push(current)
    urls.push(url2)
    this.urls =urls
    this.loadData()
  }
} 
