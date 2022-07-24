// ================= declaring variables and constants
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

const numberOfPokemons = 10;
let cards = [];
let pokemons = [];
const searchBar = document.querySelector("#searchBar");

//=============== end of declaring variables and constants

//=============== getting pokemons

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
  pokemons.push(pokemon);
  console.log("getPokemon() -> pokemon: " + pokemon.name);
};

fetchPokemons();

//=============== end of getting pokemons

/* ============ adding rotation efect =========== */

// I know this is not the best solution but it works and at my level I'm very proud of my problem solving skills :D
const addFlipACardFunction = setTimeout(addFlipToCard, 3000);

function addFlipToCard() {
  cards = document.querySelectorAll(".card_inner");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
}

/* ============ end of rotation efect =========== */

/* ============ filtering =========== */

searchBar.addEventListener("keyup", (key) => {
  let searchString = key.target.value;
  let filterdPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.includes(searchString);
  });
  createPokemonCard(filterdPokemons);
});

/* ============ end of filtering =========== */

/* ============ display pokemons =========== */

const displayFirstListOfPokemons = setTimeout(firstListOfPokemons, 2000);

function firstListOfPokemons() {
  console.log("firstListOfPokemons()");
  pokemons.forEach((pokemon) => {
    createPokemonCard(pokemon);
    console.log(pokemon);
  });
}

function createPokemonCard(pokemon) {
  // card
  let main = document.querySelector(".cards-container");
  let card = document.createElement("div");
  card.classList.add("card");
  main.appendChild(card);

  // div class="card_inner"
  let card_inner = document.createElement("div");
  card_inner.classList.add("card_inner");
  card.appendChild(card_inner);

  // div class="card_face card_face--front"
  let card_face_front = document.createElement("div");
  card_face_front.classList.add("card_face");
  card_face_front.classList.add("card_face--front");
  card_face_front.style.background = colors[pokemon.types[0].type["name"]];
  card_inner.appendChild(card_face_front);

  // card_content_front
  let card_content_front = document.createElement("div");
  card_content_front.classList.add("card_content");
  card_face_front.appendChild(card_content_front);

  // card_header_front
  let card_header_front = document.createElement("div");
  card_header_front.classList.add("card_header");
  card_content_front.appendChild(card_header_front);

  // image
  let image = document.createElement("img");
  image.classList.add("pokemon-image");
  image.setAttribute("src", pokemon.sprites["front_default"]);
  image.setAttribute("alt", pokemon.name);
  image.setAttribute("height", "96px");
  image.setAttribute("width", "96px");
  card_content_front.appendChild(image);

  // h2_front
  let h2_front = document.createElement("h2");
  h2_front.innerText = String(pokemon.name).toUpperCase();
  card_content_front.appendChild(h2_front);

  // card_body_front
  let card_body_front = document.createElement("div");
  card_body_front.classList.add("card_body");
  card_content_front.appendChild(card_body_front);

  // h3_front
  let h3_front = document.createElement("h3");
  h3_front.innerText = "#" + pokemon.id;
  card_body_front.appendChild(h3_front);

  // p_front
  let p_front = document.createElement("p");
  p_front.innerText = "Type: " + pokemon.types[0].type["name"];
  card_body_front.appendChild(p_front);

  // card_face card_face--back
  let card_face_back = document.createElement("div");
  card_face_back.classList.add("card_face");
  card_face_back.classList.add("card_face--back");
  card_face_back.style.background = colors[pokemon.types[0].type["name"]];
  card_inner.appendChild(card_face_back);

  // div class="card__content"
  let card_content_back = document.createElement("div");
  card_content_back.classList.add("card_content");
  card_face_back.appendChild(card_content_back);

  // h2_back
  let h2_back = document.createElement("h2");
  h2_back.innerText = String(pokemon.name).toUpperCase();
  card_content_back.appendChild(h2_back);

  // card_body_back
  let card_body_back = document.createElement("div");
  card_body_back.classList.add("card_body");
  card_content_back.appendChild(card_body_back);

  // h3_back
  let h3_back = document.createElement("h3");
  h3_back.innerText = "STATS";
  card_body_back.appendChild(h3_back);

  // p_stat
  pokemon.stats.forEach((element) => {
    let p_stat = document.createElement("p");
    p_stat.innerText =
      String(element.stat["name"]).toUpperCase() +
      ": " +
      String(element.base_stat);
    card_body_back.appendChild(p_stat);
  });
}

/* ============ end of display pokemons =========== */
