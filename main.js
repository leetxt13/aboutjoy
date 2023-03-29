"use strict";
//make navbar transparent or be pink as the scroll postion
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});
// handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  if (e.target.dataset.link == null) {
    return;
  }
  scrollIntoView(e.target.dataset.link);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

const contact__btn = document.querySelector(".home__contact");
contact__btn.addEventListener("click", () => {
  scrollIntoView("#Contact");
});
