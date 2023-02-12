<script lang="ts">
    import { movies as moviesStore } from "../store/movies";
	import type { Movie } from '../types/Movies';
	import { onMount, setContext } from 'svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Header from '../components/Header.svelte';
	import { sideNavOpen } from "../store/util";
	
</script>

<Header />
<Sidebar />

<slot></slot>