//select all cards
const cards = document.querySelectorAll(".card__inner");

// add onclick functionality to each card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});
