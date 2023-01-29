<script lang="ts">
    import { movies as moviesStore } from "../store/movies";
	import type { Movie } from '../types/Movies';
	import { onMount, setContext } from 'svelte';
	import Navbar from '../components/Navbar.svelte';

    // $moviesStore.
</script>

<Navbar />

<slot></slot>