//declaring variables and constants
const numberOfPokemons = 3;
let pokemonContainer = document.querySelector("main");
let cards;

const colors = {
  normal: "#a8a878",
  fighting: "#c03028",
  flying: "#a890f0",
  poison: "#a040a0",
  ground: "#e0c068",
  rock: "#b8a038",
  bug: "#a8b820",
  ghost: "#705898",
  steel: "#b8b8d0",
  fire: "#f08030",
  water: "#6890f0",
  grass: "#78c850",
  electric: "#f8d030",
  psychic: "#f85888",
  ice: "#98d8d8",
  dragon: "#7038f8",
  dark: "#705848",
  fairy: "#ee99ac",
  unknown: "#68a090",
  shadow: "#682a68",
};

const fetchPokemons = async () => {
  for (let index = 1; index <= numberOfPokemons; index++) {
    await getPokemon(index);
  }
};

// get one pokemon
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

// image pokemon?.sprites?.front_default
// id pokemon?.id
// name pokemon?.name
// type pokemon?.types[0]?.type["name"]
// stat pokemon?.stats[0]?.base_stat

function createPokemonCard(pokemon) {
  pokemonContainer.innerHTML =
    pokemonContainer.innerHTML +
    `<div class="card">
  <div class="card__inner">
    <div class="card__face card__face--front" 
    style= " 
      background-image: linear-gradient(
      to bottom right,
      var(--primary),
      ${colors[pokemon?.types[0]?.type["name"]]} 80%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    " >
      <div class="card__content">
        <div class="card__header">
          <img
            src= ${pokemon?.sprites?.front_default}
            alt="${pokemon?.name}"
            height="96px"
            width="96px"
            class="pokemon-image"
          />
          <h2>${pokemon?.name}</h2>
        </div>
        <div class="card__body">
          <h3>#${pokemon?.id}</h3>
          <p>TYPE: ${pokemon?.types[0]?.type["name"]}</p>
        </div>
      </div>
    </div>
    <div class="card__face card__face--back">
      <div class="card__content">
        <div class="card__header">
          <h2>${pokemon?.name}</h2>
        </div>
        <div class="card__body">
          <article>
            <h3>BASE STATS</h3>
            <p>HP: ${pokemon?.stats[0]?.base_stat}</p>
            <p>ATK: ${pokemon?.stats[1]?.base_stat}</p>
            <p>DEF: ${pokemon?.stats[2]?.base_stat}</p>
            <p>S-ATK: ${pokemon?.stats[3]?.base_stat}</p>
            <p>S-DEF: ${pokemon?.stats[4]?.base_stat}</p>
            <p>SPD: ${pokemon?.stats[5]?.base_stat}</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</div><p>`;
}

fullyLoaded = window.addEventListener("load", (e) => console.log(e));
if (fullyLoaded) {
  console.log("page is fully loaded");
  //select all cards
  cards = document.querySelectorAll(".card__inner");
  //add onclick functionality to each card
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
}

fetchPokemons();
