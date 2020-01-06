import { Component, OnInit,AfterViewInit,Input} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit,AfterViewInit{
  @Input('cord') public list
  @Input('txt') public txt
  mySwiper: Swiper;
  appendNumber
   prependNumber 

  slides 

	public id
  public sunSet 
  public currentDate 
  public timeNow 
  public dayNight 
  constructor() { }

  ngOnInit() {
    this.list = this.list.filter(day =>{
      if(day.dt_txt.startsWith(this.txt)){
        return day
      }
 })
  }
  ngAfterViewInit(){
    
    this.appendNumber =4
    this.prependNumber =1
		this.mySwiper = new Swiper('.swiper-container', {
		  slidesPerView:'auto',
		  centeredSlides: true,
		  spaceBetween: 30,
		  loop: true,
		  // autoplay: {
			// delay: 2500,
			// disableOnInteraction: false,
		  // },
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
		});
  }
  getDayInfo(list){
  }
  temp(list){
    let number = (list.main.temp)-273
     return Math.round( number * 10 ) / 10;
  }
  icon(list){
    this.sunSet = list.sys.sunset;
    this.currentDate = new Date();
    this.timeNow = Math.round(this.currentDate / 1000);
    this.dayNight = (this.timeNow < this.sunSet) ? "day" : "night";
    this.id = list.weather[0].id;
     return `${this.dayNight}-${this.id}`
  }
  time(list){
   let  str = list.dt_txt.split(" ")[1]
     return str.substring(0, str.length-3)
  }

// .filter(isGreaterThanFive);

}
