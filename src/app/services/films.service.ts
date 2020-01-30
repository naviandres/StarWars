import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
//trae la ruta del api
import {environment} from 'src/environments/environment';
//objeto cambiante, revisa cuado el objeto cambia
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  endpoint = 'films/';

  //inyectar http
  constructor(public http:HttpClient) { }

  //devuelve cualquier tipo de objeto
  getFilms() : Observable<any>{
    //peticion API REST
    return this.http.get(environment.URL_SWAPI + this.endpoint)
  }
}
