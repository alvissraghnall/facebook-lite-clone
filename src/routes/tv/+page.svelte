<script lang="ts">
	import MovieCard from '../../components/MovieCard.svelte';
    import type { Movie } from "../../types/Movies";    
    import type {PageData} from './$types';

    const imagePath = "https://image.tmdb.org/t/p/w500/";
    let movies: Movie[];
    export let data;

    movies = data.results;
    console.log(movies);
    
</script>

<main>

</main>

<style>
    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color:#0c1e25;
        width: 100%;
    }
</style>