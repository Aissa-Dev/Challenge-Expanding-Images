const panels = document.querySelectorAll(".panel");
console.log(panels);

function removeActiveFromAll() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveFromAll();
    panel.classList.add("active");
  });
});
