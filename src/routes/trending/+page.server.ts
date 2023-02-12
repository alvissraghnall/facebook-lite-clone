///trending/{media_type}/{time_window}

import type {PageServerLoad} from './$types';
import { error, type LoadEvent } from "@sveltejs/kit"
import { API } from '../../store/movies';

export async function load ({ fetch }: LoadEvent): Promise<PageServerLoad> {
    const mediaType = ["movie", "tv"].filter(x => {
        return x[Math.round(Math.random())]
    }).join("");
    const data = await fetch(API + "/trending/" mediaType + "/week" + "?api_key=" + import.meta.env.VITE_IMDB_API_KEY)
        .then(res => res.json())
        .catch(err => {
            return error(503, "Could not connect!")
        });
    
    return data;
}

