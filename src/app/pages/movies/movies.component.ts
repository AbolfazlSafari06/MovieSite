import { Component, OnInit } from '@angular/core';
import { Movie } from './../../../models/movie';
import { MoviesService } from './../../service/movies/movies.service';
import { MovieDto } from './../../../models/movieDto';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: MovieDto | null = null;
  genreId: string | null = null;
  searchValue: string | null = null
  constructor(private _route: ActivatedRoute, private _movieService: MoviesService,) { }

  paginate(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getPagedMoviesByGenreId(pageNumber, this.genreId);
    } else {
      if (this.searchValue) {
        this.getPagedMovies(pageNumber, this.searchValue);
      } else {
        this.getPagedMovies(pageNumber);
      }
    }
  }

  getPagedMovies(paged: number, serachValue?: string) {
    this._movieService.searchtMovies(paged, serachValue).subscribe(res => {
      this.movies = res;
    });
  }
  getPagedMoviesByGenreId(paged: number, genreId: string) {
    this._movieService.getMoviesByGenre(paged, genreId).subscribe(res => {
      this.movies = res;
    });
  }
  searchChanged() {
    if (this.searchValue) {
      this.getPagedMovies(1, this.searchValue);
    }
  }
  ngOnInit(): void {
    console.log(this._route.params)
    this._route.params.pipe(take(1)).subscribe(({ genreId }) => {

      if (genreId) {
        this.genreId = genreId;
        this.getPagedMoviesByGenreId(1, genreId);
      } else {
        this.getPagedMovies(1);
      }
    })
  }

}
