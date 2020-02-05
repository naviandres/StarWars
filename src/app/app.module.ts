import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//cliente http
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { AppRoutingModule } from './app-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';
import { MovieComponent } from './movie/movie.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PlanetsComponent } from './components/planets/planets.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CharactersComponent,
    PageNotFountComponent,
    MovieComponent,
    FilterPipe,
    PlanetsComponent
  ],
  //modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  //servicios inyectados
  providers: [],
  //componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }
