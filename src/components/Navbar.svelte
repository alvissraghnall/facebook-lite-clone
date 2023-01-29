<script lang="ts">
	import { API, movies as moviesStore } from '../store/movies';
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
	import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
	import FaSun from 'svelte-icons/fa/FaSun.svelte';
	import FaBars from 'svelte-icons/fa/FaBars.svelte';
	import FaTimes from 'svelte-icons/fa/FaTimes.svelte';
	// import FaBars from "svelte-icons/fa/FaBars.svelte";
	import DarkMode from 'svelte-dark-mode';
	import { set_data } from 'svelte/internal';

	type Theme = 'dark' | 'light';
	let theme: Theme = 'dark';

	$: switchTheme = () => {
		console.log('before switch', theme);
		if (theme === 'dark') theme = 'light';
		else theme = 'dark';
		// theme = "dark";
		console.log('after switch', theme);
	};
	$: if (typeof window !== 'undefined') {
		document.body.className = theme;
	}

	let searchValue = '';
	let sideBar = false;
	let navLinks: HTMLUListElement;

	const setSideBar = () => {
		sideBar = !sideBar;
		navLinks.style.transform = sideBar ? '' : 'translate(-100vw, 0)';
		console.log('done!');
	};
	const closeSideBar = () => {
		sideBar = false;
		navLinks.style.transform = 'translate(-100vw, 0)';
	};

	const movieSearch = async () => {
		console.log('before');

		const data = await fetch(
			API + '/search/movie?query=' +
				searchValue +
				'&api_key=' +
				import.meta.env.VITE_IMDB_API_KEY
		)
			.then((res) => res.json())
			.catch((err) => {
				console.error(500, 'Could not connect!');
			});
		console.log('after fn', data);
		if (data) moviesStore.set(data.results); searchValue = '';

		
	};
</script>

<DarkMode bind:theme />

<header>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="menu-icon" on:click={setSideBar}>
		<FaBars />
	</div>

	<div class="logo">
		<h1>Re-Motion</h1>
	</div>
	<nav>
		<ul bind:this={navLinks}>
			<li>
				<a href="movies">Movies</a>
			</li>
			<li>
				<a href="shows">TV Shows</a>
			</li>
			<li>
				<a href="trending">Trending</a>
			</li>
			<li>
				<a href="pricing">Pricing</a>
			</li>
		</ul>
		<div class="search-icon">
			<FaSearch />
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="cancel-icon" on:click={closeSideBar} class:no-disp={!sideBar}>
			<FaTimes />
		</div>
		<div class="search">
			<input
				type="text"
				placeholder="Search for your favorite motion pictures..."
				bind:value={searchValue}
			/>
			<!-- Search icon -->
			<button on:click={movieSearch}>
				<span><FaSearch /></span>
			</button>
		</div>
		<!-- <div class="mode_switch">
            <div></div>
        </div> -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="ocha-ojii" on:click={switchTheme}>
			{#if theme === 'dark'}
				<FaSun />
			{:else}
				<FaMoon />
			{/if}
		</div>
	</nav>
</header>

<style>
	:global(.dark) {
		background: #032f62;
		color: #f1f8ff;
	}
	header {
		display: flex;
		width: 100vw;
		background-color: hsl(198, 100%, 5%);
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	.logo {
		font-weight: 700;
		color: hsl(0, 0%, 100%);
		letter-spacing: 1.3px;
		font-size: 17px;
		margin-left: 8.8px;
	}
	/* 
    h1 {
        /* margin-left: 44px; 
    } */

	ul {
		list-style-type: none;
		display: flex;
		justify-content: space-evenly;
		flex-direction: row;
		width: 50%;
	}

	ul li > a {
		text-decoration: none;
		font-size: 20px;
		font-weight: 500;
	}

	ul li > a:hover {
		color: hsl(14, 100%, 50%);
		/* border-bottom: 3px solid hsl(14, 100%, 50%); */
	}

	li {
		padding: 0 15px;
	}

	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 0 0 0 40px;
		flex: 1;
	}

	nav > .search {
		/* width: 100%; */
		height: 40px;
		min-width: 18% !important;
		background: hsl(198, 100%, 5%);
		border: 1px solid hsla(0, 0%, 61%, 0.2);
		border-radius: 3px;
		display: flex;
		align-items: center;
	}

	nav > .search > :first-child:focus,
	nav .search > :first-child:active {
		outline: none;
	}

	nav > .search > :first-child {
		height: 100%;
		width: 100%;
		padding: 0 10px;
		color: hsl(0, 52%, 94%);
		background: none;
		border: none;
		font-weight: 500;
		font-size: 17px;
	}

	nav > .search > :nth-child(2) {
		padding: 0 15px;
		background: hsl(14, 100%, 50%);
		border-radius: 3px;
		cursor: pointer;
		border: none;
		font-size: 16px;
		color: hsl(0, 52%, 94%);
		width: 45px;
		height: 40px;
	}

	nav > .search > :nth-child(2) > span {
		width: 80%;
		height: 80%;
	}

	.ocha-ojii {
		width: 29px;
		height: 29px;
		cursor: pointer;
	}

	.menu-icon,
	.search-icon,
	.cancel-icon {
		width: 32px;
		color: hsl(0, 52%, 94%);
		text-align: center;
		cursor: pointer;
		margin: 0 34px;
		height: 32px;
		font-size: 17px;
		display: none;
	}

	@media screen and (max-width: 1095px) {
		/* nav > :nth-child(3) {
            display: none;
        } */

		nav > .search {
			display: none;
		}

		.logo {
			flex: 10;
			text-align: center;
		}

		ul {
			position: fixed;
			z-index: 99;
			top: 70px;
			width: 100%;
			height: 100%;
			background: hsl(240, 22%, 10%);
			display: inline-block;
			padding: 10px 50px 0 50px;
			text-align: center;
			padding-left: 0;
			left: 0;
			padding-top: 50px;
			transition: ease-in-out 1.3s;
			/* transform: translate(-100vw, 0); */
		}

		ul li {
			line-height: 40ox;
			margin: 80px 0;
		}

		ul li > a {
			font-size: 22px;
		}

		.ocha-ojii {
			display: none;
		}

		.menu-icon,
		.search-icon {
			display: block;
		}

		.cancel-icon {
			top: 123px;
			right: 0;
			z-index: 9999999;
			padding-right: 0.8em;
			display: inline-block;
			position: absolute;
			width: 52px;
			height: 52px;
			transition-delay: 1.3s;
			transform: rotate(22px);
		}
	}
</style>
