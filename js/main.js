// function for statistics counter increment
const counters = document.querySelectorAll(".counter .value");
const statisticsBody = document.getElementById("statistics-body");

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
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((e, i) => {
  e.addEventListener("click", () => {
    removeFaqCollapsible(i);
    e.classList.toggle("collapsible--expanded");
  });
});

function removeFaqCollapsible(i) {
  const faqBody = document.querySelectorAll(".faq-body .collapsible");
  faqBody.forEach((collapsible, j) => {
    if (i !== j + 1) {
      collapsible.classList.remove("collapsible--expanded");
    }
  });
}
// below function for active border in who is it for section

const border = document.querySelectorAll(".who-is-it-for-section .border");
window.addEventListener("scroll", activeBorder);

function activeBorder() {
  border.forEach((e) => {
    const trigger = window.innerHeight / 2.5;
    const borderTop = e.getBoundingClientRect().top;
    const borderBottom = e.getBoundingClientRect().bottom;

    if (trigger > borderTop && trigger < borderBottom) {
      e.classList.add("border-active");
    } else {
      e.classList.remove("border-active");
    }
  });
}

activeBorder();

// below function for load more Testimonials
const testimonialsLoad = document.querySelectorAll(".testimonials.load");
const loadMoreBtn = document.querySelectorAll(
  ".testimonials-button-container .btn"
);
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
