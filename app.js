//declaring variables and constants
const numberOfPokemons = 150;
let pokemonContainer = document.querySelector("main");

//fetch api
let getPokemons = fetch("https://pokeapi.co/api/v2/pokemon/");

console.log(getPokemons);
console.log(pokemonContainer);

//select all cards
const cards = document.querySelectorAll(".card__inner");

// add onclick functionality to each card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});
