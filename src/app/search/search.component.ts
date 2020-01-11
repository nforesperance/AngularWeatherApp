import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServeService } from '../services/serve.service';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { default as city_list } from '../city-list.json';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() public mapEvent = new EventEmitter();
  @Output() public mapE= new EventEmitter();
  searchControl = new FormControl();
  cities: any[] = [];
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<any[]>;
  showmap: boolean = false;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        startWith('')
      ).subscribe(value => {
        const array = this.cities.filter(element => element.name.toLowerCase().includes(value.toLowerCase())).splice(0, 10);
        console.log(array);
        this.filteredOptions = of(array);
      });

    this.loadCities().then(data => {
      this.cities = data;
      console.log(this.cities);
    }).catch(err => console.log(err));
  }

  private loadCities() {
    return new Promise<any[]>((resolve, reject) => {
      try {
        const data = city_list;
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  click(e) {
    const array = this.cities.filter(element => element.name.toLowerCase() === this.searchControl.value.toLowerCase());
    if (array.length < 1) {
      this.error('Country not valid');
    } else {
      const lat = array[0].coord.lat;
      const lng = array[0].coord.lon;
      this.mapEvent.emit({ lat: lat, lng: lng, showmap: false });
    }
  }
  mapClick(){
    this.mapE.emit();
    this.showmap = !this.showmap
  }

  error(message: string, action = '', duration = 3500) {
    return this.snackBar.open(message, action, {
      duration,
      panelClass: ['bg-red-200', 'text-red-700', 'w-auto', 'text-center'],
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
