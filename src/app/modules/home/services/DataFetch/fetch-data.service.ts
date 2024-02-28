import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, map, throwError } from 'rxjs';

interface Movie {
  id: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  private moviesSubject: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  public movies$: Observable<Movie[]> = this.moviesSubject.asObservable();

  url: string = "https://reactnative.dev/movies.json";

  constructor(private http: HttpClient) {
    this.fetchMovies();
  }

  private fetchMovies(): void {
    this.http.get<Movie[]>(this.url)
      .subscribe((data: any) => {
        this.moviesSubject.next(data.movies);
      });
  }

  getMovieList(): Observable<Movie[]> {
    return this.movies$;
  }

  getMovieById(id: number): Observable<{ id: string, title: string, releaseYear: string } | undefined> {
    return this.moviesSubject.asObservable().pipe(
      map((movies: any) => movies.find((movie: any) => movie.id === id))
    );
  }
}
