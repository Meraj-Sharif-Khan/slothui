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
const navItems = document.querySelectorAll(".nav__list-item>a");

navItems.forEach((e) => {
  e.addEventListener("click", () => {
    removeNavActive();
    e.classList.add("active");
  });
});

function removeNavActive() {
  navItems.forEach((e) => {
    e.classList.remove("active");
  });
}

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
// below function for who is it for section
const tab = document.querySelectorAll(".who-is-it-for__text");
const whoIsItForImg = document.querySelectorAll(".who-is-it-for-img");

import topImgTab1 from "../images/mobilePreview/topImg-tab-1.png";
import topImgTab2 from "../images/mobilePreview/topImg-tab-2.png";
import topImgTab3 from "../images/mobilePreview/topImg-tab-3.png";
import bottomImgTab1 from "../images/mobilePreview/bottomImg-tab-1.png";
import bottomImgTab2 from "../images/mobilePreview/bottomImg-tab-2.png";
import bottomImgTab3 from "../images/mobilePreview/bottomImg-tab-3.png";

tab.forEach((e, i) => {
  e.addEventListener("click", () => {
    removeActive();
    removeAnimate();
    e.classList.add("border-active");

    setTimeout(() => {
      animate();
    }, 100);

    setTimeout(() => {
      changeImg(i);
    }, 500);
  });
});

function removeActive() {
  tab.forEach((e) => {
    e.classList.remove("border-active");
  });
}

function changeImg(i) {
  if (i === 0) {
    whoIsItForImg[0].src = topImgTab1;
    whoIsItForImg[1].src = bottomImgTab1;
  }
  if (i === 1) {
    whoIsItForImg[0].src = topImgTab2;
    whoIsItForImg[1].src = bottomImgTab2;
  }
  if (i === 2) {
    whoIsItForImg[0].src = topImgTab3;
    whoIsItForImg[1].src = bottomImgTab3;
  }

  // const imgUrl =
  //   "https://raw.githubusercontent.com/Meraj-Sharif-Khan/slothui/main/images";
  // whoIsItForImg[0].src = `${imgUrl}/mobilePreview/topImg-tab-${i + 1}.png`;
  // whoIsItForImg[1].src = `${imgUrl}/mobilePreview/bottomImg-tab-${i + 1}.png`;
}

function animate() {
  whoIsItForImg.forEach((e) => {
    e.classList.add("animate");
  });
}

function removeAnimate() {
  whoIsItForImg.forEach((e) => {
    e.classList.remove("animate");
  });
}

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
