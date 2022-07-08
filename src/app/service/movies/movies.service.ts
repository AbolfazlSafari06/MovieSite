import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from './../../../models/movieDto';
import { of, switchMap } from 'rxjs';

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

  searchtMovies(page: number = 1) {
    return this.http.get<MovieDto>(`${this.baseURL}movie/popular?page=${page}&api_key=${this.apiKey}`)
      .pipe(switchMap(res => { return of(res.results) }))
  }

}
