import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  endpoint = 'characters/';

  //inyectar http
  constructor(public http:HttpClient) { }

  //devuelve cualquier tipo de objeto
  getCharacters() : Observable<any>{
    //peticion API REST
    return this.http.get(environment.URL_SWAPI + this.endpoint)
  }

}
