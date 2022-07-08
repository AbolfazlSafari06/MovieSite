import { Movie } from './movie';
import { Tv } from './tv';
export interface MovieDto {
     page: number;
     results: Movie[];
     total_pages: number;
     total_results: number;
}
export interface TVDto {
     page: number;
     results: Tv[];
     total_pages: number;
     total_results: number;
}