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
  load1 = true

  // darksky
  urls;
  allData
  constructor(
    private http: HttpClient, private _serve:ServeService
  ){}
  ngOnInit(){
    this.getUrls()
    this._serve.getPosition().then(pos=> {
        this.getWeather(pos)
      });
    this.getUrls()
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
                  this.load1 = false  
                
          })
          .catch(err =>{
            console.log("error");       
          })  
      })
      .catch(err =>{
        console.log("error");       
      })
  }
search(url) {
    return new Promise((resolve,reject)=>{
      this.http.get(url).toPromise()
            .then(data=>{
                resolve(data)
            })
    })
}

loadData() {
    let Requests = []
    this.urls.forEach(url => {
        Requests.push(this.search(url))
    });
    Promise.all(Requests).then(data =>{
      this.allData = data
        // render(data)
    })
}
  getUrls(){
    let today = new Date()
    let day = today.getDay()
    console.log(day);   
    
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    let utc = tomorrow.getTime()/1000
    console.log(utc);
   
    // let dum =  new Date('2020.01.05').getTime() / 1000;
    //             console.log(dum);

    // this.urls = some data
    // this.loadData()

  }
}
