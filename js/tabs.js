window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tabs__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      document.querySelectorAll(".tabs__btn").forEach(function (e) {
        e.classList.remove("section-catalog-btn-outline");
      });
      tabsBtn.classList.add("section-catalog-btn-outline");
      const path = event.currentTarget.dataset.path;
      document
        .querySelectorAll(".section-catalog__tab-content")
        .forEach(function (tabContent) {
          tabContent.classList.remove("tab-content-active");
        });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("tab-content-active");

      document.getElementById("#accordion").accordion("refresh");
    });
  });

  document.querySelectorAll(".accordion-content__btn span").forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      document
        .querySelectorAll(".accordion-content__btn span")
        .forEach((ev) => {
          ev.classList.remove("accordion-content__btn-active");
        });
      const target = ev.target;
      target.classList.add("accordion-content__btn-active");
    });
  });
});
