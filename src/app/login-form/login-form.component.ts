import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import {Router} from "@angular/router"


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  
  constructor(private dbService: NgxIndexedDBService,private router: Router){
    dbService.currentStore = 'Users';
  }

  ngOnInit() {
    
  }

  public user; // this will content the informations of the user who will connect if his connexion succeed
  
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
            this.user = person; // transfer the user informations into user
            console.log(this.user.id);

            this.dbService.update({name: this.user.name, username:this.user.username, password:this.user.password, image: this.user.image, sexe: this.user.sexe, date: this.user.date,loggedin:1, id:this.user.id}).then(
              () => {
                console.log('loggedin takes 1')
              },
              error => {
                console.log(error);
              }
            );

            this.router.navigate(['/home'])
            
            
          } else {
            console.log('echec de connexion')
            this.router.navigate(['/login'])
          }
      },
      error => {
          console.log('echec');
      }
    );

  }






}
