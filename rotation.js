let cards;
let pokemons = [];

// I know this is not the best solution but it works and at my level I'm very proud of my problem solving skills :D
const myTime = setTimeout(addFlipToCard, 3000);

function addFlipToCard() {
  cards = document.querySelectorAll(".card_inner");
  console.log(cards);
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
}

console.log(pokemons);
searchBar.addEventListener("keyup", (key) => {
  let searchString = key.target.value;
  let filterdPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.includes(searchString);
  });
  createPokemonCard(filterdPokemons);
});