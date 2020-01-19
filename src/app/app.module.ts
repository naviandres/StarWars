import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent
  ],
  //modulos
  imports: [
    BrowserModule
  ],
  //servicios inyectados
  providers: [],
  //componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }
