document.addEventListener("DOMContentLoaded", () => {
  const lowermenuBtns = document.querySelectorAll(".lowermenu__btn");
  let drops = document.querySelectorAll(".dropdown");

  lowermenuBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      let currentBtn = e.currentTarget;

      let drop = currentBtn
        .closest(".lowermenu__item")
        .querySelector(".dropdown");

      drop.classList.toggle("dropdown--active");

      currentBtn.classList.toggle("lowermenu__link-icon-rotate");

      drops.forEach((el) => {
        if (el !== drop) {
          el.classList.remove("dropdown--active");
          el.closest(".lowermenu__item")
            .querySelector(".lowermenu__btn")
            .classList.remove("lowermenu__link-icon-rotate");
        }
      });
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".lowermenu")) {
      drops.forEach((el) => {
        el.classList.remove("dropdown--active");
        el.closest(".lowermenu__item")
          .querySelector(".lowermenu__btn")
          .classList.remove("lowermenu__link-icon-rotate");
      });
    }
  });
});
