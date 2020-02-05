import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';
import { MovieComponent } from './movie/movie.component';
import { BodyComponent } from './components/body/body.component';
import { CharactersComponent } from './characters/characters.component';


const routes: Routes = [
  { path: '', redirectTo: 'films', pathMatch: 'full'},
  { path: 'films', component:BodyComponent},
  { path: 'film/:id', component:MovieComponent},
  { path: 'character/:id', component:CharactersComponent},
  { path: '**' , component: PageNotFountComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
