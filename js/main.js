const collapsibles = document.querySelectorAll(".collapsible");
const border = document.querySelectorAll(".who-is-it-for-section .border");
const loadMoreBtn = document.querySelectorAll(
  ".testimonials-button-container .btn"
);
const testimonialsLoad = document.querySelectorAll(".testimonials.load");

// below function for collapsible nav and FAQ

collapsibles.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("collapsible--expanded");
  });
});

// below function for active border in who is it for section
border.forEach((e) => {
  e.addEventListener("click", () => {
    removeActiveBorder();
    e.classList.add("border-active");
  });
});

function removeActiveBorder() {
  border.forEach((e) => {
    e.classList.remove("border-active");
  });
}

// below function for load more Testimonials
loadMoreBtn.forEach((e) => {
  let visible = false;
  e.addEventListener("click", () => {
    if (!visible) {
      e.innerText = "Load Less -";
      visible = true;
    } else {
      e.innerHTML = `Load More <img src="./images/icons/loadMore.png" alt="" />`;
      visible = false;
    }
    loadtestimonials();
  });
});

function loadtestimonials() {
  testimonialsLoad.forEach((e) => {
    e.classList.toggle("visible");
  });
}
