import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from './../../../models/movieDto';
import { of, switchMap } from 'rxjs';
import { Movie } from './../../../models/movie';
import { MovieDetail } from './../../../models/movieDetail';
import { MovieVideoDto } from 'src/models/movieVideoDto';
import { MovieImages } from './../../../models/movieImages';
import { MovieCredit } from 'src/models/movieCredit';
import GenreDto from './../../../models/genreDto';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }
  baseURL: string = "https://api.themoviedb.org/3/";
  apiKey: string = "b2e580cae1bbcdd5437ef5b83790846b";

  getMovies(type: "top_rated" | "upcoming" | "popular" = "upcoming", count: number = 12) {
    return this.http.get<MovieDto>(`${this.baseURL}movie/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap(res => { return of(res.results.slice(0, count)) }))
  }
  searchtMovies(page: number = 1, serachValue?: string) {
    const uri = serachValue ? 'search/movie' : 'movie/popular';
    console.log(uri)
    return this.http.get<MovieDto>(`${this.baseURL}${uri}?page=${page}&query=${serachValue}&api_key=${this.apiKey}`)
      .pipe(switchMap(res => { return of(res) }))
  }
  getMoviesByGenre(page: number = 1, genreId: string) {
    return this.http.get<MovieDto>(`${this.baseURL}discover/movie?with_genres=${genreId}?page=${page}&api_key=${this.apiKey}`)
      .pipe(switchMap(res => { return of(res) }))
  }
  getMovieVidoes(id: number) {
    return this.http.get<MovieVideoDto>(`${this.baseURL}movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results)
      }))
  }
  getMovieImages(id: number) {
    return this.http.get<MovieImages>(`${this.baseURL}movie/${id}/images?api_key=${this.apiKey}`);
  }
  getMovieCredits(id: number) {
    return this.http.get<MovieCredit>(`${this.baseURL}movie/${id}/credits?api_key=${this.apiKey}`);
  }
  getMovie(id: number) {
    return this.http.get<Movie>(`${this.baseURL}movie/${id}?api_key=${this.apiKey}`)
      .pipe(switchMap(res => { return of(res) }))
  }
  getMoviesGenres() {
    return this.http.get<GenreDto>(`${this.baseURL}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(switchMap(res => { return of(res) }))
  }

}
