<script lang="ts">
	import type { ITvShow } from "../../types/Movies";
	import TvCard from "../../components/TvCard.svelte";
    import type {PageData} from './$types';

    const imagePath = "https://image.tmdb.org/t/p/original/";
    let shows: ITvShow[];
    export let data;

    shows = data.results;
    console.log(shows);
    
</script>

<main>
    {#each shows as show}
        <TvCard 
            poster_path={show.poster_path || ""} 
            imagesLink={imagePath} 
            title={show.name}
            relDate={show.first_air_date}
            id={show.id}
            vote_average={show.vote_average}
            overview={show.overview}
        />
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