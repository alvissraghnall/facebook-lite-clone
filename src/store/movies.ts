import type { Movie } from "../types/Movies";
import { writable } from "svelte/store";

export const movies = writable<Movie[]>([]);

// export { movies }
export const API = "https://api.themoviedb.org/3";