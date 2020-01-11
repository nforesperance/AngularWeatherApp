import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, NgForm} from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public nom = "sondi";
  public username = "edvain"
  public password = "azerty"
  public date;
  sexe: string;
  image: string;
  public url: string | ArrayBuffer;
  public file: Blob;

  readFile(event) {

    this.image = event.target.result;
    console.log(event.target.result);
      
      this.dbService.add({ name: this.nom, image:this.image, sexe: this.sexe, date: this.date}).then(
      () => {
          console.log('ajouté avec succès');
      },
      error => {
          console.log("echec");
      });

  }

  public delete(){
    this.url = null;
  }
  
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

  onSubmit(f:NgForm) {
    if(!(f.value.name==="")) {
      this.nom = f.value.name;
    }
    let intermediaire = this.nom;
    if(!(f.value.username==="")) {
      this.username = f.value.username;
      console.log('la valeur de nom après modification de username est: '+ this.nom);
      this.nom = intermediaire;
    }
    if(!(f.value.date==="")) {
      this.date = f.value.date;
      this.nom = intermediaire;
    }
    if(!(f.value.password === "")) {
      this.password = f.value.password;
      this.nom = intermediaire;
    }
    if(!(f.value.sexe==="")) {
      this.sexe = f.value.sexe;
      this.nom = intermediaire;
    }

    console.log(f.value);
    console.log(f.valid);
  }

  constructor(private dbService: NgxIndexedDBService){
    dbService.currentStore = 'Users';
  }
  ngOnInit() {
  }

}
