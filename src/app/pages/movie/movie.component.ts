import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../service/movies/movies.service';
import { Movie } from './../../../models/movie';
import { MovieDetail } from './../../../models/movieDetail';
import { IMAGES_SIZES } from 'src/app/constanst/image-sizes';
import { MovieVideo } from 'src/models/movieVideoDto';
import { MovieImages } from 'src/models/movieImages';
import { MovieCredit } from './../../../models/movieCredit';
import { OnDestroy } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  readonly imageSizes = IMAGES_SIZES;
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredit | null = null;
  isImage: boolean = true

  constructor(
    private _route: ActivatedRoute,
    private _movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this._route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id)
      this.getMovieVideo(id)
      this.getMovieImages(id)
      this.getMovieCredit(id)
    })
  }

  ngOnDestroy(): void {

  }

  getMovie(id: number) {
    this._movieService.getMovie(id).subscribe((res) => {
      this.movie = res
    });
  }
  getMovieVideo(id: number) {
    this._movieService.getMovieVidoes(id).subscribe((res) => {
      this.movieVideos = res
    });
  }
  getMovieImages(id: number) {
    this._movieService.getMovieImages(id).subscribe((res) => {
      this.movieImages = res;
      console.log(res)
    });
  }
  getMovieCredit(id: number) {
    this._movieService.getMovieCredits(id).subscribe((res) => {
      this.movieCredits = res;
    });
  }
}
