<script lang="ts">
export let cur: number = 0;
export let len: number;

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);


const prev = (ev: Event) => {
    ev.preventDefault();
    cur = clamp(--cur, 0, len - 1);
    if(cur === 0) cur = len - 1;
};

const next = (ev: Event) => {
    ev.preventDefault();
    cur = clamp(++cur, 0, len - 1);
    if(cur === len - 1) cur = 0;
};
</script>

<div class="carousel">
    <div class="items">
        <slot name="content" />
    </div>
    <div class="indicators">
        <slot name="indicators" />
    </div>

    <!-- slider controls -->
    <button type="button" class="control prev" on:click={prev}>
        <span>
            <svg aria-hidden="true" class="control-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="screenreader">Previous</span>
        </span>
    </button>

    <button type="button" class="control next" on:click={next}> 
        <span>
            <svg aria-hidden="true" class="control-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="screenreader">Next</span>
        </span>
    </button>
</div>

<style>
    .carousel {
        position: relative;
    }

    .items {
        position: relative;
        overflow: hidden;
        border-radius: 1.5rem;
        height: 14rem;
    }

    .indicators {
        position: absolute;
        z-index: 30;
        display: flex;
        margin-left: .75rem;
        transform: translateX(-50%);
        bottom: 1.25rem;
        left: 50%;
    }

    .control {
        position: absolute;
        z-index: 30;
        /* margin-left: .6rem; */
        margin-right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        background: none;
        cursor: pointer;
        outline: none;
        padding: 0;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .control:focus {
        outline: none;
    }

    .prev {
        left: 0;
    }

    .next {
        right: 0;
    }

    .control:hover > span {
        opacity: .5;
        background: white;
    }

    .control:focus > span {
        box-shadow: inset 0 0 0 calc(4px + 2px) whitesmoke;
        outline: none;
    }

    .control > span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: white;
        opacity: .3;
    }

    :global(.dark .carousel .control > span) {
        background: rgb(31 41 55);
        opacity: .3;
    }

    :global(.dark .carousel .control:hover > span) {
        background: rgb(31 41 55);
        opacity: .6;
    }

    :global(.dark .carousel .control:focus > span) {
        box-shadow: inset 0 0 0 calc(4px + 2px) rgb(31 41 55);
        opacity: .7;
    }

    :global(.dark .carousel .control:focus > span .control-icon) {
        color: rgb(31 41 55);
    }

    .screenreader {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    .control-icon {
        width: 1.25rem;
        height: 1.25rem;
        color: rgb(70, 70, 104);
    }

    @media screen and (min-width: 444px) {
        .control > span {
            height: 2.5rem;
            width: 2.5rem;
        }

        .control-icon {
            width: 1.5rem;
            height: 1.5rem;
        }
    }

    @media screen and (min-width: 768px) {
        .items {
            height: 37.5rem;
        }
    }
</style>