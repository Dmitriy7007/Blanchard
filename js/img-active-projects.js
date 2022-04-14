const links = document.querySelectorAll(".section-projects__item-frame");
const imgs = document.querySelectorAll(".section-projects__img");
links.forEach((el, i) => {
  let number = i + 1;
  el.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("section-projects__img")) {
      event.target.src = `img/svg/${number}.svg`;
    } else {
      event.target.firstElementChild.src = `img/svg/${number}.svg`;
    }
  });
  el.addEventListener("mouseout", function (event) {
    if (event.target.classList.contains("section-projects__img")) {
      event.target.src = `img/svg/${number}.svg`;
    } else {
      event.target.firstElementChild.src = `img/svg/1.${number}.svg`;
    }
  });
});

links.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
