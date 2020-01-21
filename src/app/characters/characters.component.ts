import { Component, OnInit } from '@angular/core';

export class AppComponent implements OnInit {
  title = 'app.apiary.io Testing';
  people: Observable<any>;

  constructor(
    private starWarsService: StarWarsService
  ) { }

  ngOnInit() {
    //  this.people =  this.starWarsService.getHerosByCutom('https://swapi.co/api/people');
    // this.people = this.starWarsService.getViaAjax('https://swapi.co/api/people');
     this.people = this.starWarsService.getHeros();;
  }

  postContent() {
    // this.starWarsService.setHero().subscribe(() => {
    //     this.starWarsService.getHeros();
    // });
  }
}

