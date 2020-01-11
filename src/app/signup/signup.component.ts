import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { stringify } from 'querystring';
import {Router} from "@angular/router"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  constructor(public dbService: NgxIndexedDBService,private router: Router){
    dbService.currentStore = 'Users';
  }

  name = 'Angular 4';

  ngOnInit() {
  }


public nom; username; password; sexe; date;
public url: string | ArrayBuffer;
public image;
public file: Blob;




  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      var reader = new FileReader();

      reader.readAsDataURL(this.file); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
      }
    }
  }
  public delete(){
    this.url = null;
  }

  onSubmit(form: NgForm){
    this.username = form.value.username;
    this.password = form.value.password;
    this.nom = form.value.name;
    this.date = form.value.date;
    this.sexe = form.value.sexe;

    console.log(form.value);

    this.dbService.add({ name: this.nom, username:this.username, password:this.password, image: this.file, sexe: this.sexe, date: this.date}).then(
      () => {
          console.log('ajouté avec succès');
          this.router.navigate(['/login'])
      },
      error => {
          console.log(error);
      });
  }
}
