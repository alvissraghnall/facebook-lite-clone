
<div class="skeleton">
    <div class="inner">
        <svg class="plhd" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
    </div>

    <span class="screenreader">
        Loading...
    </span>
</div>

<style>
    .skeleton {
        max-width: 24rem;
        padding: 1rem;
        border: 1px solid rgb(229, 231, 235);
        border-radius: 0.25rem;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px -1px rgb(0 0 0 / .1);
        animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    :global(.dark .skeleton, .dark .skeleton .inner) {
        border: 1px solid hsl(217, 19%, 27%);
    }

    .inner {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin-bottom: 1rem;
        border-radius: 0.25rem;
        background-color: hsl(216, 12%, 84%);
    }

    svg {
        height: 100%;
        width: 100%;
        color: rgb(229, 231, 235);
    }

    :global(.dark .skeleton .inner .plhd) {
        color: rgb♦(75, 85, 99);
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }

    @media screen and (min-width: 768px) {
        .skeleton {
            padding: 1.5rem;
        }
    }
</style>