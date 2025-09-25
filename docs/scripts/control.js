const pillsBox = document.querySelector(".about-pills-box");
const leftArrow = document.querySelector(".pill-arrow.left");
const rightArrow = document.querySelector(".pill-arrow.right");

function updateArrows() {
  leftArrow.disabled = pillsBox.scrollLeft <= 0;
  rightArrow.disabled =
    pillsBox.scrollLeft + pillsBox.clientWidth >= pillsBox.scrollWidth - 1;
}

leftArrow.addEventListener("click", () => {
  pillsBox.scrollBy({ left: -200, behavior: "smooth" });
  setTimeout(updateArrows, 400);
});

rightArrow.addEventListener("click", () => {
  pillsBox.scrollBy({ left: 200, behavior: "smooth" });
  setTimeout(updateArrows, 400);
});

pillsBox.addEventListener("scroll", updateArrows);
window.addEventListener("resize", updateArrows);

document.addEventListener("DOMContentLoaded", () => {
  updateArrows(); // run once immediately
  setTimeout(updateArrows, 50); // run again after layout is stable
});

document.querySelectorAll(".about-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
