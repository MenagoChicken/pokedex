//declaring variables and constants
const numberOfPokemons = 150;
let pokemonContainer = document.querySelector("main");

const fetchPokemons = async () => {
  for (let index = 1; index <= numberOfPokemons; index++) {
    getPokemon(index);
  }
};

// get one pokemon
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

getPokemon(1);

//select all cards
const cards = document.querySelectorAll(".card__inner");

// add onclick functionality to each card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});

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
  pokemonContainer.innerHTML = `<p>Pokemon id: ${pokemon?.stats[0]?.base_stat} <p>`;
}

fetchPokemons();
