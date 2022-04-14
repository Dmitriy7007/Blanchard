const sectionTooltip = document.querySelector(".section-projects__tooltip");

sectionTooltip.addEventListener("mouseover", function (event) {
  let target = event.target;
  if (target.closest(".marker")) {
    target.previousElementSibling.classList.add("opacityPopup");
    const widthPopup = target.previousElementSibling.clientWidth;
    target.previousElementSibling.style.right = `${-widthPopup / 2 + 12}px`;
  }
});
sectionTooltip.addEventListener("mouseout", function (event) {
  let target = event.target;
  if (target.closest(".marker")) {
    target.previousElementSibling.classList.remove("opacityPopup");
  }
});

sectionTooltip.querySelectorAll(".marker").forEach(function (ev) {
  ev?.addEventListener("keydown", function (event) {
    if (event.code == "Enter") {
      if (event.code == "Enter") {
        const popup = event.target.parentNode.querySelector(".popup");
        const widthPopup = popup.clientWidth;
        popup.style.right = `${-widthPopup / 2 + 12}px`;
        popup.classList.toggle("opacityPopup");
      }
    }
  });
});
