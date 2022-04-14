const burger = document?.querySelector(".burger");
const nav = document?.querySelector(".menu-nav");
const navItems = document?.querySelectorAll("a");
const body = document.body;
const header = document?.querySelector(".header .menu");
const hero = document?.querySelector(".section-hero");
const headerHeight = header.offsetHeight;
const heroHeight = hero.offsetHeight;
document
  .querySelector(":root")
  .style.setProperty("--header-height", `${headerHeight}px`);

document
  .querySelector(":root")
  .style.setProperty("--hero-height", `${heroHeight}px`);

burger?.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger?.classList.toggle("burger--active");
  nav?.classList.toggle("nav--visible");
});

navItems.forEach((el) => {
  el.addEventListener("click", () => {
    body.classList.remove("stop-scroll");
    burger?.classList.remove("burger--active");
    nav?.classList.remove("nav--visible");
  });
});

document.addEventListener("click", (ev) => {
  if (!(ev.target.closest(".menu-nav") || ev.target.closest(".burger"))) {
    body.classList.remove("stop-scroll");
    burger?.classList.remove("burger--active");
    nav?.classList.remove("nav--visible");
  }
});
