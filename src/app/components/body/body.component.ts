import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  films: Observable<any[]>;

  filterFilms = '';

  constructor(private filmsService: FilmsService) {
    //suscripcion
    filmsService.getFilms().subscribe(
      //se almacna respuesta de la peticion
      responseObject => {
        this.films = responseObject.results;
        
        console.log(this.films);
      }
    );

  }

  ngOnInit() {
    
  }

}
