/* ============ filtering =========== */

searchBar.addEventListener("keyup", (key) => {
  let searchString = key.target.value;
  console.log(searchString);
  const filterdPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.includes(searchString);
  });

  main.innerHTML = "";

  filterdPokemons.forEach((p) => {
    createPokemonCard(p);
  });
});

/* ============ end of filtering =========== */
