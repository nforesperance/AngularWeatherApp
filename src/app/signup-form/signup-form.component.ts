import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})


export class SignupFormComponent implements OnInit {

  constructor(private dbService: NgxIndexedDBService, picture: string){
    dbService.currentStore = 'Users';
  }


  ngOnInit() {
  }

  addUser(name:string, username: string, password:string, image: string){

    this.dbService.add({ name: name, username: username, password: password, image: image}).then(
      () => {
          console.log('ajouté avec succès')
      },
      error => {
          console.log(error);
      }
     );
  }

  getImage(event: Event){
    
    let file = event.srcElement.files[0];
    this.getBase64(file).then(
      data => {
        console.log(data)
        return data;}
    );
  }

  getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  newUser (form: NgForm) {
    let name = form.value.name;
    let username = form.value.username;
    let password = form.value.password;
    let image = '';

    this.addUser(name, username, password, image);
  }

}
