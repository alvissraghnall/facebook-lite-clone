// import type {PageServerLoad} from './$types';
import { error, type LoadEvent } from "@sveltejs/kit"

export async function load ({ fetch }: LoadEvent) {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=" + import.meta.env.VITE_IMDB_API_KEY)
        .then(res => res.json())
        .catch(err => {
            return error(502, "Could not connect! Refresh this window!");
        });
    
    return data;
}
