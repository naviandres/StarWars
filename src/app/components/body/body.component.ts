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
        //var oJSON = this.sortJSON( this.films, 'episode_id', 'asc');
     
        console.log(this.films);
      }
    );

  }
   ordenarAsc(p_array_json, p_key) {

    p_array_json.sort(function (a, b) {
       return a[p_key] > b[p_key];
    });    
 }
 sortJSON(data, key, orden) {
  return data.sort(function (a, b) {
      var x = a[key],
      y = b[key];

      if (orden === 'asc') {
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      }

      if (orden === 'desc') {
          return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      }
  });
}


  ngOnInit() {
    
  }

}
