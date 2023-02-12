<script lang="ts">
	import IoIosStar from "svelte-icons/io/IoIosStar.svelte";

export let data: { [x: string]: any };

const url = data.name;
const movie = data.data.results;
</script>

<main>
    <div class="intro">
        <img class="bkdp" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
    </div>
    <div class="details">
        <div class="aka-ekpe">
            <div>
                <!-- svelte-ignore a11y-missing-attribute -->
                <img class="poster" src={"https://image.tmdb.org/t/p/original" + movie.poster_path} />
            </div>
        </div>
        <div class="aka-nri">
            <div class="movie-content">
                <div class="nom">{movie.original_title}</div>
                <div class="tagline">{movie.tagline}</div>
                <div class="rating">
                    {movie.vote_average}
                    <IoIosStar />
                    <span class="votes">{"(" + movie.vote_count + ") votes"}</span>
                </div>  
                <div class="runtime">{movie.runtime + " mins"}</div>
                <div class="release-date">{"Release date: " + movie.release_date}</div>
                <div class="genres">
                    {#if movie && movie.genres}
                        {#each movie.genres as genre}
                            <span class="genre">{genre.name}</span>
                        {/each}
                    {/if}
                </div>
            </div>
            <div class="synopsis">
                <div>Synopsis</div>
                <div>{movie ? movie.overview : ""}</div>
            </div>
        </div>
    </div>
    <div class="links">
        <h2>Useful Links</h2>
        {#if movie && movie.homepage}
            <a href={movie.homepage} target="_blank" rel="noreferrer" >
                <p>
                    <span>Homepage 
                        <span class="external-link-icon">
                        <!-- external link icon -->
                        </span>
                    </span>
                </p>
            </a>
        {/if}
        {#if movie && movie.imdb_id}
            <a href={"https://www.imdb.com/title/" + movie.imdb_id} target="_blank" rel="noreferrer">
                <p>
                    <span class="imdb-btn">IMDb
                        <span class="external-link-icon">
                        <!-- external link icon -->
                        </span>
                    </span></p>
            </a>
        {/if}
    </div>
    <h2>Production companies</h2>
    <div class="production">
        {#if movie && movie.production_companies}
            {#each movie.production_companies as company} 
            {#if company.logo_path} 
                <span>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                    <span>{company.name}</span>
                </span>
            {/if}
            
            {/each}
        {/if}
    </div>
</main>

<style>
main {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.intro {
    width: 80%;
}

img.bkdp {
    width: 100%;
    height: 73rem;
    object-fit: cover;
    object-position: 0 35%;
}

.details {
    align-items: center;
    width: 75%;
    display: flex;
    position: relative;
    bottom: 225px;
}

.aka-ekpe {
    margin-right: 2rem;
}

img.poster {
    width:300px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.86) 0px 22px 40px 6px;
}

.aka-nri {
    color: white;
    display: flex;
    flex-direction: column;
    height: 450px;
    justify-content: space-between;
}

.movie-content > div {
    text-shadow: 0px 0px 5px #000000;
    margin-bottom: .5rem;
}

.nom {
    font-weight: 600;
    font-size: 3rem;
}

.tagline {
    color: #eee;
}

.votes {
    margin-left: 1rem;
}

.genres {
    margin: 1.25rem 0;
}

.genre {
    padding: .5rem;
    border: 2px solid white;
    border-radius: 20px;
    margin-right: 1rem;
}

.synopsis {
    margin: 2rem 0;
    flex: 0.8;
}

.synopsis > :first-child {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
    font-weight: 600;
    display: flex;
    position: relative;
    align-items: center;
}

.synopsis > div:last-of-type {
    margin-left: auto;
}

.links {
    position: relative;
    bottom: 120px;
    display: flex;
    justify-content: space-between;
    width: 75%;
}

.links > h2:first-of-type {
    font-size: 2.4rem;
    font-weight: 800;

}

.links > a > p > span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 2rem;
    border-radius: 20px;
    cursor: pointer;
    width: 150px;
    color: black;
    background-color:rgb(255, 0, 0);
    font-weight: bold;
}

.external-link-icon {
    margin-left: 1.4rem;
}

.imdb-btn {
    background-color:#f3ce13;
}

main > h2 {
    font-size: 3rem;
}

.production {
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 4rem;
}

.production > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.production > span > img {
    width: 200px;
    margin: 2rem;
}

</style>