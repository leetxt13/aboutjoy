"use strict";

//ScrollIntoView 함수
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

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
  navbarMenu.classList.remove(
    "open"
  ); /* 메뉴클릭하면 토글을 열어본 메뉴리스트 사라지게*/
  scrollIntoView(e.target.dataset.link);
});

//when clicking contact button, move to contact menu
const contact__btn = document.querySelector(".home__contact");
contact__btn.addEventListener("click", () => {
  scrollIntoView("#Contact");
});

//when passing by Home, make opacity turned into transparent

function makeTransparent(selector, originselector) {
  const element = document.querySelector(selector);
  const originHeight = document
    .querySelector(originselector)
    .getBoundingClientRect().height;
  document.addEventListener("scroll", () => {
    element.style.opacity = 1 - window.scrollY / originHeight;
  });
}
makeTransparent(".home__container", "#home");

// show "arrow up button" when scrolling down
const arrowup__btn = document.querySelector(".arrowup__btn");
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowup__btn.classList.add("appear");
  } else {
    arrowup__btn.classList.remove("appear");
  }
});
// when clicking arrowup__btn, move to home menu
arrowup__btn.addEventListener("click", () => {
  home.scrollIntoView({ behavior: "smooth" });
});

//filtering photo menu

const photoBtnContainer = document.querySelector(".photo__categorys");
const projectContainer = document.querySelector(".photo__projects");
const projects = document.querySelectorAll(".project");
const project__animation = document.querySelector(".project__animation");

photoBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter === null) {
    return;
  }
  // Remove selection from the previous item and select the new one
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");
  // ↑↑클릭한 것은 CSS효과 활성화, 이전 것은 CSS효과 해제↑↑

  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 200);
});

// when clicking toggle button, make menu open and close
const toggleBtn = document.querySelector(".navbar__toggle-btn");
toggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
}); // 메뉴를 클릭시 토클이 삭제되도록 함.(상단 navbar js코드 참조)
