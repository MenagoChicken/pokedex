let cards;

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
