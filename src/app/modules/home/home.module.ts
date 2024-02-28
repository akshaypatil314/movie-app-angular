import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SpecificMovieComponent } from './components/specific-movie/specific-movie.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeContainerComponent,
    MoviesListComponent,
    SpecificMovieComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ]
})
export class HomeModule {

}
