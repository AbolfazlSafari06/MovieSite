export interface MovieDetail {
     adult: false,
     backdrop_path: string,
     belongs_to_collection: collectionType,
     budget: number,
     genres: genreType[],
     homepage: string,
     id: number,
     imdb_id: string,
     original_language: string,
     original_title: string,
     overview: string,
     popularity: number,
     poster_path: string,
     productionCompanies: productionCompanieType[],
     production_countries: productionCountriesType[]
     release_date: string,
     revenue: number,
     runtime: number,
     spoken_languages: spokenLanguagesType[],
     status: string,
     tagline: string,
     title: string,
     video: false,
     vote_average: number,
     vote_count: number
}
interface genreType {
     id: string;
     name: string
}
interface collectionType {
     id: number,
     name: string
     poster_path: string,
     backdrop_path: string
}
interface productionCompanieType {
     id: number,
     logo_path: string | null,
     name: string,
     origin_country: string
}
interface productionCountriesType {
     iso_3166_1: string,
     name: string
}
interface spokenLanguagesType {
     english_name: string,
     iso_639_1: string,
     name: string
}