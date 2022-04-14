function showSingleOption(sel) {
  const prevBlockEl = document.querySelector(".swip-gallery.active"),
    currBlockEl = document.querySelector(sel);
  if (!currBlockEl || prevBlockEl === currBlockEl) return;
  prevBlockEl && prevBlockEl.classList.remove("active");
  currBlockEl.classList.add("active");
  swiper1.update();
  swiper2.update();
  swiper3.update();
}

const select = document.querySelector("#selectCustom");
const choices = new Choices(select, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
});
