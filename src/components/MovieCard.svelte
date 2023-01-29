<div class="holder">
    <div>
        <MdPlayCircleFilled />
    </div>
    <div class="image-holder">
        <img src={movie.poster_path ? `${imagesLink + movie.poster_path}` : ""} alt="" />
    </div>
    <div>
        <h3>{ movie.title.length < 40 ? movie.title : movie.title.substring(0, 41).concat("...")}</h3>
    </div>
</div>

<script lang="ts">
	import type { Movie } from 'src/types/Movies';
    import MdPlayCircleFilled from 'svelte-icons/md/MdPlayCircleFilled.svelte';

    export let movie: Movie;
    export let imagesLink: string;
</script>

<style>

    .image-holder > img {
        margin: 1.6rem 0 .25rem .93rem;
        border-radius: 1.4rem;
        width: 24rem;
        height: 33rem;
    }

    h3, img {
        cursor: pointer;
        transition: .7s;
    }

    img:hover {
        transform: scale(1.05);
    }

    .holder {
        position: relative;
    }

    .holder > :first-child {
        color: rgb(0, 255, 64);
        position: absolute;
        bottom: 5rem;
        left: 1.5rem;
        visibility: visible;
        z-index: 100;
        cursor: pointer;
        width: 3.3rem;
        height: 3.3rem;
        transition: ease-in-out .5s;
    }

    .holder > :first-child:hover {
        transform: scale(1.36);
    }

    h3 {
        margin-left: 1rem;
    }

    .holder > :nth-child(3) {
        text-overflow: ellipsis;
    }
</style>