import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters-component',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  title = 'app.apiary.io Testing';
  //people: Observable<any>;

  characters;

  constructor(

    //private starWarsService: StarWarsService
    private charactersService: CharactersService,


  ) {
    this.characters = this.charactersService.getCharacters();
    console.log(JSON.stringify(this.characters));
   }
   

  ngOnInit() {
    //  this.people =  this.starWarsService.getHerosByCutom('https://swapi.co/api/people');
    // this.people = this.starWarsService.getViaAjax('https://swapi.co/api/people');
     //this.people = this.starWarsService.getHeros();;
  }

  postContent() {
    // this.starWarsService.setHero().subscribe(() => {
    //     this.starWarsService.getHeros();
    // });
  }


}


