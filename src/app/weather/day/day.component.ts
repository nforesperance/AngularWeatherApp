import { Component, OnInit,AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit,AfterViewInit{
  mySwiper: Swiper;
  appendNumber
   prependNumber 

  slides = [

    'https://via.placeholder.com/300x200/C70039/ffffff',
    'https://via.placeholder.com/300x200/900C3F/ffffff',
    'https://via.placeholder.com/300x200/C70039/ffffff',
    'https://via.placeholder.com/300x200/900C3F/ffffff',
    'https://via.placeholder.com/300x200/C70039/ffffff',
    'https://via.placeholder.com/300x200/900C3F/ffffff',
    'https://via.placeholder.com/300x200/C70039/ffffff',
    'https://via.placeholder.com/300x200/900C3F/ffffff',
    'https://via.placeholder.com/300x200/C70039/ffffff',
    'https://via.placeholder.com/300x200/900C3F/ffffff',
    'https://via.placeholder.com/300x200/C70039/ffffff',
    'https://via.placeholder.com/300x200/900C3F/ffffff'
  ];

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.appendNumber =4
    this.prependNumber =1
		this.mySwiper = new Swiper('.swiper-container', {
		  slidesPerView:'auto',
		  centeredSlides: true,
		  spaceBetween: 80,
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

}
