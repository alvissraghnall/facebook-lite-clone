// fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)

import type {PageServerLoad} from './$types';
import { error, type LoadEvent } from "@sveltejs/kit"

export async function load ({ fetch, params }: LoadEvent): Promise<PageServerLoad> {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_IMDB_API_KEY}`)
        .then(res => res.json())
        .catch(err => {
            return error(502, "Could not connect!")
        });
    
    return data;
}

// 