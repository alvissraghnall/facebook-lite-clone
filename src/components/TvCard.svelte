<script lang="ts">
import Skeleton from "./Skeleton.svelte";
import type { ITvShow, Movie } from "../types/Movies";
import { onMount } from "svelte";

export let imagesLink: string; 
export let poster_path: string;
export let title: string;
export let relDate: string;
export let vote_average: number;
export let overview: string;
export let id: number;

let loading = true;
onMount(() => {
    setTimeout(() => {
        loading = false;
    }, 1000);
});

</script>

<div class="card">
    {#if loading}
        <div class="oji">

            <Skeleton
            />
        </div>
    {:else}
        <a href={"movie"+id}>
            <div class="card">
                <img src={imagesLink + poster_path} alt="">
                <div class="overlay">
                    <div class="title">
                        {title}
                    </div>
                    <div class="facts">
                        {relDate}
                        <span class="rating">
                            {vote_average}
                        </span>
                    </div>
                    <div class="desc">
                        {overview.slice(0, 100) + "..."}
                    </div>
                </div>
            </div>
        </a>
        
    {/if}
<!-- s-if -->
</div>


<style>
a {
    color: white;
}

.oji {
    display: inline-block;
    transition: transform .2s;
    position: relative;
    overflow: hidden;
    border-radius: .5rem;
    margin: .2rem;
    cursor: pointer;
    /* min-width: */
    height: 36rem;
    z-index: 0;
    /* border: 1px solid rgb(99, 99, 99); */
}

.oji:hover {
    transform: scale(1.2);
    z-index: 1000;
    box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, .12) 0 -12px 30px, rgba(0, 0, 0, .12) 0 4px 6px, rgba(0, 0, 0, .17) 0 12px 13px, rgba(0, 0, 0, .09) 0 -3px 5px;
}

img {
    height: 36rem;
}

.overlay {
    position: absolute;
    bottom: 0;
    transition: opacity .2s;
    opacity: 0;
    background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1));
    width: 85%;
    justify-content: flex-end;
    flex-direction: column;
    display: flex;
    padding: 0 1rem 1rem 1rem;
    /* height */
}

.overlay:hover {
    opacity: 1;
}

.title {
    font-size: 1.22rem;
    font-weight: 900;
    margin-bottom: .5rem;
}

.facts {
    font-size: .75rem;
    margin-bottom: .25rem;
}

.rating {
    float: right;
}

.desc {
    font-size: .75rem;
    margin-bottom: .25rem;
    font-style: italic;
    display: flex;
    text-align: left;
    width: 50%;
}
</style>
