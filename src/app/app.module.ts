import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { AppRoutingModule } from './app-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CharactersComponent,
    PageNotFountComponent
  ],
  //modulos
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //servicios inyectados
  providers: [],
  //componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }
