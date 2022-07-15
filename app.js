//declaring variables and constants
const numberOfPokemons = 150;
let pokemonContainer = document.querySelector("main");

// get one pokemon
const getPokemon = (id) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
    if (!res.ok) {
      console.log("ERROR FROM API");
      errorMessageSomethingWrongWithAPI();
    } else {
      console.log("SUCCES");
    }
    res.json().then((data) => console.log(data));
  });

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
