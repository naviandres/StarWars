import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { FimlService } from '../services/fiml.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private route: ActivatedRoute, private filmService: FimlService, private location: Location) { }

  ngOnInit() {
    this.getFilm();
  }


  film: Observable<any>;
  id;

  getFilm(): void {
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
    this.filmService.getFilm(this.id)
      .subscribe(
        responseObject => {
          this.film = responseObject;
        }
      )
  }

}
