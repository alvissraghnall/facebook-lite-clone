<script lang="ts">
    import { movies as moviesStore } from "../../store/movies";
	import MovieCard from '../../components/MovieCard.svelte';
    import type { Movie } from "../../types/Movies";    
    // import type {PageData} from './$types';

    const imagePath = "https://image.tmdb.org/t/p/w500/";
    let movies: Movie[];
    export let data;

    movies = data.results;
    console.log(movies);
    
    moviesStore.set(movies);
</script>

<!-- <h2> trending </h2> -->
<div class="movies">
    {#each $moviesStore as movie}
        <MovieCard title={movie.title} poster_path={movie.poster_path ? movie?.poster_path : ""} imagesLink={imagePath} />
    {/each}
</div>

<style>
/*     
    h2 {
        text-transform: uppercase;
        font-size: 2.3rem;
        margin: 2.5rem;
        font-weight: 900;
        font-family: monospace, sans-serif, serif;
    } */

    .movies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color:#0c1e25;
        width: 100%;
    }
</style>