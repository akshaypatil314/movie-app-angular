import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../../services/DataFetch/fetch-data.service';

@Component({
  selector: 'app-specific-movie',
  templateUrl: './specific-movie.component.html',
  styleUrl: './specific-movie.component.css'
})
export class SpecificMovieComponent implements OnInit {

  movieId: any;
  movieDetails: { id: string, title: string, releaseYear: string } | undefined;

  constructor(private route: ActivatedRoute, private fetchData: FetchDataService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.movieId = params['id'];
    });

    this.fetchData.getMovieById(this.movieId).subscribe((data) => {
      this.movieDetails = data;
      console.log(this.movieDetails)
    },
      (error) => {
        console.log(error)
      })
  }

}
