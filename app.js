const card = document.querySelector(".card__inner");

card.addEventListener("click", (e) => {
  card.classList.toggle("is-flipped");
});
