//declaring variables and constants
const numberOfPokemons = 150;
let pokemonContainer = document.querySelector("main");

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

function errorMessageSomethingWrongWithAPI() {
  pokemonContainer.innerHTML = `<p class="errorMessage">Something went wrong with API - SORRY!</p>`;
}

// image pokemon?.sprites?.front_default
// id pokemon?.id
// name pokemon?.name
// type pokemon?.types[0]?.type["name"]
// stat pokemon?.stats[0]?.base_stat

function createPokemonCard(pokemon) {
  console.log("create pokemon Card");
  console.log(Object.values(pokemon.types));
  pokemonContainer.innerHTML =
    pokemonContainer.innerHTML +
    `<div class="card">
  <div class="card__inner">
    <div class="card__face card__face--front">
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

fetchPokemons();

//select all cards
const cards = document.querySelectorAll(".card__inner");

// add onclick functionality to each card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});
