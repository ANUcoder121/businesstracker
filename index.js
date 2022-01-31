let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 80) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

const removed = document.querySelectorAll(".text-muted");

for (let i = 0; i < removed.length; i++) {
  removed[i].classList.remove("text-muted");
}
