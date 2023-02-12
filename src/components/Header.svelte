<script lang="ts">
import FaModx from 'svelte-icons/fa/FaModx.svelte';
import DarkMode from 'svelte-dark-mode';
import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
import FaSun from 'svelte-icons/fa/FaSun.svelte';
import { sideNavOpen } from '../store/util';
	
type Theme = 'dark' | 'light';
let theme: Theme = 'dark';

let topLine: SVGLineElement;
let middleLine: SVGLineElement;
let bottomLine: SVGLineElement;

const handleSideNavBtnClick = () => {
    sideNavOpen.update(prev => !prev);
}

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
</script>

<DarkMode bind:theme />

<header>
    <div class="logo+btn">
        <button class="sidenav-btn" on:click={handleSideNavBtnClick}>
            <svg width="32" height="24" class="svg-tag">
                <line bind:this={topLine} x1="0" y1="2" x2="32" y2="2" class="button-line" class:btnTopLineOpen={$sideNavOpen}></line>
                <line bind:this={middleLine} x1="0" y1="12" x2="24" y2="12" class="button-line" class:btnMiddleLineOpen={$sideNavOpen}></line>
                <line bind:this={bottomLine} x1="0" y1="22" x2="32" y2="22" class="button-line" class:btnBottomLineOpen={$sideNavOpen}></line>
            </svg>
        </button>
        <div class="logo">
            <span>
                <FaModx />
            </span>
            <span>
                ~Motion~
            </span>
        </div>
    </div>
    <div class="">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="ocha-ojii" on:click={switchTheme}>
			{#if theme === 'dark'}
				<FaSun />
			{:else}
				<FaMoon />
			{/if}
		</div>
    </div>
</header>

<style>
header {
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(21 26 44);
    color: #eee;
}

header > div {
    margin: 0 1rem;
}

header > :first-child > .logo > span:nth-child(2) {
    font-family: cursive, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.2rem;
}

.ocha-ojii {
    width: 29px;
    height: 29px;
    cursor: pointer;
}

.sidenav-btn {
    outline: none;
    border: none;
    top: 6px;
    left: .7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    cursor: pointer;
    background-color: transparent;
    background-image: none;
}

.logo\+btn {
    display: flex;
}

.logo {
    display: flex;
    margin: 0 2.6rem;
    align-items: center;
    justify-content: center;
}

.logo > :first-child {
    width: 2.3rem;
    height: 2.3rem;
}

.logo > span {
    margin: 0 .2rem;
}

.button-line {
    stroke: currentColor;
    stroke-width: 3;
    transition: transform .3s ease-in-out;
}

.svg-tag {
    min-height: 24px;
    transition: transform .3s ease-in-out;
    display: block;
    color: #eee;
}

.btnTopLineOpen {
    transform: translate(6px) rotate(45deg);
}

.btnMiddleLineOpen {
    opacity: 0;
}

.btnBottomLineOpen {
    transform: translate(-12px,9px) rotate(-45deg);
}
/* 
    1: transform: translate(6px) rotate(45deg);
    2: opacity: 0;
    3: transform: translate(-12px,9px) rotate(-45deg);
*/
</style>