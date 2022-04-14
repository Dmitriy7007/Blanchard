function active() {
  let check = document.querySelector("#checkbox-list");
  for (let i = 0; i < check.children.length; ++i) {
    check.children[i].style.display = "block";
    document
      .querySelector(".checkbox-array")
      .classList.add("checkbox-array_rotate");
  }
}

function hidden() {
  let check = document.querySelector("#checkbox-list");
  for (let i = 0; i < check.children.length; ++i) {
    if (!check.children[i].firstElementChild.checked) {
      check.children[i].style.display = "none";
      document
        .querySelector(".checkbox-array")
        .classList.remove("checkbox-array_rotate");
    }
  }
}

let count = 1;
function but() {
  count *= -1;
  if (count > 0) active();
  else hidden();
}

document.querySelectorAll(".checkbox").forEach(function (ev) {
  ev?.querySelector(".checkbox__label")?.addEventListener(
    "click",
    function (event) {
      console.log(event.target);
      event.target
        ?.querySelector(".checkbox__icon2")
        ?.classList.toggle("checkbox-icon-cross");
      ev.querySelector(".checkbox__icon2")?.addEventListener(
        "click",
        function (event2) {
          event2.target.classList.remove("checkbox-icon-cross");
        }
      );
    }
  );
});

document.querySelectorAll(".checkbox__icon").forEach(function (ev) {
  ev?.addEventListener("keydown", function (event) {
    if (event.code == "Enter") {
      const checkbox =
        event.target.parentNode.querySelector(".checkbox__input");
      if (checkbox.checked) {
        checkbox.checked = false;
      } else {
        checkbox.checked = true;
      }
    }
  });
});
