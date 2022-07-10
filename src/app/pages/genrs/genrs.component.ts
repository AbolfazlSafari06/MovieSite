import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/models/genreDto';
import { MoviesService } from './../../service/movies/movies.service';

@Component({
  selector: 'app-genrs',
  templateUrl: './genrs.component.html',
  styleUrls: ['./genrs.component.scss']
})
export class GenrsComponent implements OnInit {
  genres: Genre[] = []
  constructor(private _movieServie: MoviesService) { }

  ngOnInit(): void {
    this._movieServie.getMoviesGenres().subscribe((res) => {
      this.genres = res.genres;
    })
  }

}
