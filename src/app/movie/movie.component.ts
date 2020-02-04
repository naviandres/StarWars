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

  getFilm(): void {
    var id = +this.route.snapshot.paramMap.get('id');
    switch (id) {
      case 4:
        id = 1;
        break;
      case 5:
        id = 2;
        break;
      case 6:
        id = 3;
        break;
      case 1:
        id = 4;
        break;
      case 2:
        id = 5;
        break;
      case 3:
        id = 6;
        break;

      default:
        break;
    }
    this.filmService.getFilm(id)
      .subscribe(
        responseObject => {
          this.film = responseObject;
        }
      )
  }

}
