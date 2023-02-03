<script lang="ts">
	import MovieCard from '../../components/MovieCard.svelte';
    import type { ITvShow } from "../../types/Movies";    
    import type {PageData} from './$types';

    const imagePath = "https://image.tmdb.org/t/p/w500/";
    let shows: ITvShow[];
    export let data;

    shows = data.results;
    console.log(shows);
    
</script>

<main>
    {#each shows as show}
        <MovieCard title={show.name} poster_path={show.poster_path} imagesLink={imagePath} />
    {/each}
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