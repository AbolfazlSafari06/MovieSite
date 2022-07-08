import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TVDto } from 'src/models/movieDto';
import { switchMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  baseURL: string = "https://api.themoviedb.org/3/";
  apiKey: string = "b2e580cae1bbcdd5437ef5b83790846b";
  constructor(private http: HttpClient) {
  }

  getTvs(type: "popular" | "top_rated" | "latest" = "popular", count: number = 12) {
    return this.http.get<TVDto>(`${this.baseURL}tv/${type}?api_key=${this.apiKey}`).pipe(switchMap(res => { return of(res.results.slice(0, count)) }))
  }

}
