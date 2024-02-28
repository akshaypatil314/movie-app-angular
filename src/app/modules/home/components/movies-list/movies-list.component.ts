import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/DataFetch/fetch-data.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit {
  movies$: any;

  constructor(private fetchData: FetchDataService) { }

  ngOnInit() {
    this.movies$ = this.fetchData.getMovieList();
  }
}
