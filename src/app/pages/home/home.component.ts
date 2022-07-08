import { Component, OnInit } from '@angular/core';
import { TvService } from 'src/app/service/tv/tv.service';
import { GetMovieListResponse } from 'src/models/getMovieListResponse';
import { Tv } from 'src/models/tv';
import { MoviesService } from '../../service/movies/movies.service';
import { Movie } from './../../../models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _moviesService: MoviesService, private _tvService: TvService) { }
  upcomingMovies: Movie[] = [];
  poupularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  topRatedTvs: Tv[] = [];
  poupulaTvs: Tv[] = [];
  latestTvs: Tv[] = [];

  ngOnInit(): void {
    this._moviesService.getMovies("upcoming").subscribe((response: Movie[]) => {
      this.upcomingMovies = response;
    })
    this._moviesService.getMovies("popular").subscribe((response: Movie[]) => {
      this.poupularMovies = response;
      console.log("getMovies")
    })
    this._moviesService.getMovies("top_rated").subscribe((response: Movie[]) => {
      this.topRatedMovies = response;
    })
    this._tvService.getTvs("top_rated").subscribe((response: any) => {
      this.topRatedTvs = response;
      console.log("top_rated")
      console.log(response)
    })
    this._tvService.getTvs("popular").subscribe((response: any) => {
      this.poupulaTvs = response;
      console.log("popular")
      console.log(response)
    })
  }

}
