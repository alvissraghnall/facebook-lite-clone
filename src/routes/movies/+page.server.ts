import type {PageServerLoad} from './$types';
import { error, type LoadEvent } from "@sveltejs/kit"

export async function load ({ fetch }: LoadEvent): Promise<PageServerLoad> {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + import.meta.env.VITE_IMDB_API_KEY)
        .then(res => res.json())
        .catch(err => {
            return error(500, "Could not connect!")
        });
    
    return data;
}

// 