import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  constructor(private dbService: NgxIndexedDBService, private router: Router){
    dbService.currentStore = 'Users';
  }

  ngOnInit() {
    
  }
  
  onSubmit(form: NgForm){
    console.log(form.value);
    let username = form.value.username;
    let password = form.value.password;
    let confirm = form.value.confirm;

    this.dbService.getByIndex('username', username).then(
      person => {
          console.log(person);
          if (password === person.password){
            
            console.log('login réussi');
            
          } else {
            console.log('echec de connexion')
          }
      },
      error => {
          console.log('echec');
      }
    );

  }

}
