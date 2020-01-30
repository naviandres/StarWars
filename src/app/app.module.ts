import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//cliente http
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { AppRoutingModule } from './app-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';
import { MovieComponent } from './movie/movie.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CharactersComponent,
    PageNotFountComponent,
    MovieComponent
  ],
  //modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  //servicios inyectados
  providers: [],
  //componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }
