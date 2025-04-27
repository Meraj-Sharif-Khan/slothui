const collapsibles = document.querySelectorAll(".collapsible");
const border = document.querySelectorAll(".who-is-it-for-section .border");
const testimonialsLoad = document.querySelectorAll(".testimonials.load");
const loadMoreBtn = document.querySelectorAll(
  ".testimonials-button-container .btn"
);
const counters = document.querySelectorAll(".counter .value");
const statisticsBody = document.getElementById("statistics-body");

// function for statistics counter increment
let counterTriggered = 0;
if (counterTriggered === 0) {
  window.addEventListener("scroll", triggerCounter);
}

function triggerCounter() {
  if (counterTriggered === 0) {
    counters.forEach((counter) => {
      const trigger = (window.innerHeight / 10) * 9;
      const counterTop = statisticsBody.getBoundingClientRect().top;
      counter.innerText = "0";
      const updateCounter = () => {
        const target = Number(counter.getAttribute("data-target"));
        const initialValue = Number(counter.innerText);
        const incrimentBy = target / 150;

        if (initialValue < target) {
          counter.innerText = `${Math.ceil(initialValue + incrimentBy)}`;
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };
      if (trigger > counterTop) {
        updateCounter();
        counterTriggered++;
      }
    });
  }
}

triggerCounter();

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
