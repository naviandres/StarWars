import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
//trae la ruta del api
import { environment } from 'src/environments/environment';
//objeto cambiante, revisa cuado el objeto cambia
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class FimlService {

  endpoint = 'films/';
  constructor(public http: HttpClient) { }

  getFilm(id: number): Observable<any> {
    return this.http.get(environment.URL_SWAPI + this.endpoint + id)
  }

}
