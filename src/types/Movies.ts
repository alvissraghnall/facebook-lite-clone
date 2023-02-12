// interface RootObject {
//     page: number;
//     results: Result[];
//     total_pages: number;
//     total_results: number;
// }
  
export interface Movie {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
  
export interface ITvShow extends Pick<Movie,
    "genre_ids" |
    "id" |
    "original_language" |
    "overview" |
    "popularity" |
    "poster_path" |
    "vote_average" |
    "vote_count" 
> {
    backdrop_path?: string;
    first_air_date: string;
    name: string;
    origin_country: string[];
    original_name: string;
}