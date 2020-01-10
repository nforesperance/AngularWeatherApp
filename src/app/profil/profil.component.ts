import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  nom: string;
  date: string;
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
  
  onSumitNom(form:NgForm) {
    this.nom = form.value.nom;

    let reader = new FileReader();
    reader.addEventListener('load', this.readFile);
    reader.readAsText(this.file);
  }

  onSumitDate(form:NgForm) {
     this.date = form.value.date;

     let reader = new FileReader();
    reader.addEventListener('load', this.readFile);
    reader.readAsText(this.file);
  }

  onSumitSexe(form:NgForm) {
      this.sexe = form.value.sexe;

      let reader = new FileReader();
    reader.addEventListener('load', this.readFile);
    reader.readAsText(this.file);
  }


  constructor(private dbService: NgxIndexedDBService){
    dbService.currentStore = 'Users';
  }
  ngOnInit() {
  }

}
