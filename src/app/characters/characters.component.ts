import { Component, OnInit } from '@angular/core';

import { CharacterService } from '../services/character.service';
import { Observable, from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-component',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  constructor(private route: ActivatedRoute, private characterService: CharacterService, private location: Location) { }

  ngOnInit() {
    this.getCharacter();
  }


  character: Observable<any>;
  id: number;

  getCharacter(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    switch (this.id) {
      case 4:
        this.id = 1;
        break;
      case 5:
        this.id = 2;
        break;
      case 6:
        this.id = 3;
        break;
      case 1:
        this.id = 4;
        break;
      case 2:
        this.id = 5;
        break;
      case 3:
        this.id = 6;
        break;

      default:
        break;
    }
    this.characterService.getCharacter(this.id)
      .subscribe(
        responseObject => {
          this.character = responseObject;
        }
      )
  }



}


