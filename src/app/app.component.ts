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
  
  //fordark
   urls = [];
   allData;
  constructor(
    private http: HttpClient, private _serve:ServeService
  ){}
  ngOnInit(){
    this._serve.getPosition().then(pos=> {
        // this.getWeather1(pos)
        this.getWeather(pos)
        this.getUrls(pos)
        
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
     return this.http.get(url).toPromise()
    .then(data =>{
      console.log(data)     
    })
    .catch(err =>console.log(err)
    )
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
    })
  }
  getUrls(pos){
    let today = new Date()
    let day = today.getDay()
    let date = today.getDate()
    let urls =[]
    for (let i = day; i>0; i--){
       let dt = today.setDate(date-i)
       let str =  (today.getTime()/1000).toString();
       let time = str.substring(0,str.indexOf("."));     
       let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/0207b907a2bb4c9fa5065494935d5dda/${pos.lat},${pos.lng},${time}?exclude=currently,flags`
       urls.push(url)
    }
    urls.push(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/0207b907a2bb4c9fa5065494935d5dda/${pos.lat},${pos.lng}?extend=hourly`)
    this.urls =urls
    this.loadData()
  }
} 
