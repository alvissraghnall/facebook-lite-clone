<script lang="ts">
import Carousel from './Carousel.svelte';
import IoIosStar from 'svelte-icons/io/IoIosStar.svelte';
// import { browser } from '$app/env';
import type { Movie } from "../types/Movies";    
import { slide } from "../util/slide";

let carousel;
export let data: Movie[];
let cur: number;

</script>

<Carousel len={data.length} bind:cur>
    <div slot="content">
    {#each data as movie, id}
        {#if id === cur}
        <a 
            href={"/movie/" + movie.id}
            in:slide={{ duration: 350 }}
            out:slide={{ duration: 350 }}
        >
        
            <!-- <span>{movie.original_title}</span> -->
            <div class="">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie.original_title} />
            </div>
            <div class="overlay">
                <div class="title">
                    <h2>{movie ? movie.original_title : ""}</h2>
                </div>
                <div class="facts">
                    <span>{movie ? movie.release_date : ""} </span>
                    <span class="rating">
                        {movie ? movie.vote_average : ""}
                        <!-- icon star -->
                        <span><IoIosStar /></span>
                    </span>
                </div>
                <div class="description">
                    <p>{movie?.overview}</p>
                </div>
            </div>
            
        </a>
        {/if}
    {/each}
    </div>
    <div class="indicators" slot="indicators">
        {#each data as movie, i}
            <button class="indicator-btn" class:active={i === cur} type="button" aria-label={"slide1-"+i} aria-current="false" on:click={() => cur = i}>

            </button>

        {/each}
    </div>
</Carousel>

<style>
a > div:first-child {
    height: 100%;
}

a > div:first-child > img {
    width: 100%;
    height: 100%;
    /* object-fit: contain; */
    margin: auto;

}

.overlay {
    position: absolute;
    padding: 5rem;
    bottom: 0;
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    opacity: 0;
    transition: opacity .5s ease;
    background-image: linear-gradient(rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 1));
}

.overlay:hover {
    opacity: 1;
}

.title > h2 {
    margin-bottom: .45rem;
    text-align: left;
    font-size: 4rem;
    font-weight: 900;
}

.facts {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.rating {
    margin-left: 3rem;
}

.rating > span {
    margin-left: .5rem;
    width: 1.5rem;
    display: inline-block;
}

.description {
    font-size: 1.2rem;
    margin-bottom: .34rem;
    font-style: italic;
    display: flex;
    text-align: left;
    width: 50%;
}

.indicator-btn {
    width: .75rem;
    height: .75rem;
    border-radius: 50%;
    outline: none;
    border: none;
    margin-left: 1rem;
    cursor: pointer;
    transition: all .6s ease;
}

.active {
    background: #fff;
    transform: scale(1.3);
}

</style>