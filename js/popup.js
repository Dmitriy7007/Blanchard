const sectionTooltip = document.querySelector(".section-projects__tooltip");

sectionTooltip.addEventListener("mouseover", function (event) {
  let target = event.target;
  if (target.closest(".marker")) {
    target.previousElementSibling.classList.add("opacityPopup");
    const widthPopup = target.previousElementSibling.clientWidth;
    target.previousElementSibling.style.right = `${-widthPopup / 2 + 8}px`;
  }
});
sectionTooltip.addEventListener("mouseout", function (event) {
  let target = event.target;
  if (target.closest(".marker")) {
    target.previousElementSibling.classList.remove("opacityPopup");
    target.previousElementSibling.style.right = "0";
  }
});
