import { Component, OnInit } from '@angular/core';
import { Movie } from './../../../models/movie';
import { MoviesService } from './../../service/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = []
  constructor(private _movieService: MoviesService) { }

  ngOnInit(): void {
    this._movieService.searchtMovies().subscribe(res => {
      this.movies = res;
    });
  }

}
