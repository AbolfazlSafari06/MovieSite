import { Movie } from './movie';
export interface GetMovieListResponse {
     dates: GetMovieListDateObject
     page: number
     results: Movie[]
     total_pages: number
     total_results: number
}
export interface GetMovieListDateObject {
     minimum: string
     maximum: string
}