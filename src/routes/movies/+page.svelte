<script lang="ts">
    import Carousel from "../../components/MovieCarousel.svelte";
    import { movies as moviesStore } from "../../store/movies";
	import MovieCard from '../../components/MovieCard.svelte';
    import type { Movie } from "../../types/Movies";    
    import type {PageData} from './$types';

    const imagePath = "https://image.tmdb.org/t/p/w500/";
    let movies: Movie[];
    export let data;

    movies = data.results;
    console.log(movies);
    
    moviesStore.set(movies);
</script>

<Carousel data={$moviesStore} />
<div class="movies">
    {#each $moviesStore as movie}
        <MovieCard title={movie.title} poster_path={movie.poster_path} imagesLink={imagePath} />
    {/each}
</div>

<style>
    .movies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color:#0c1e25;
        width: 100%;
    }
</style>