const cards = document.querySelectorAll(".section-events__card-item");
const btnVisible = document.querySelector(".btn-events");
let countCard;
const mediaQuery = window.matchMedia("(max-width: 768px)");

function renderCard() {
  cards.forEach((el, index) => {
    el.style.display = "flex";
    if (index >= countCard) {
      el.style.display = "none";
    }
  });
}

function handleTabletChange(e) {
  if (e.matches) {
    countCard = 2;
    renderCard();
  } else {
    countCard = 3;
    renderCard();
  }
}

handleTabletChange(mediaQuery);
mediaQuery.addListener(handleTabletChange);

btnVisible.addEventListener("click", (count) => {
  cards.forEach((el) => {
    el.style.display = "flex";
    btnVisible.classList.add("btn-events-is-hidden");
  });
});
