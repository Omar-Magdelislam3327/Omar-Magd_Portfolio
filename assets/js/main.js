let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".section3");
let started = false; 
let section5 = document.querySelector(".section5");
let spans = document.querySelectorAll(".progress span");
window.onscroll = function () {
  if (window.scrollY + 600 >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
  if (window.scrollY + 200 >= section.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 4000 / goal);
}


