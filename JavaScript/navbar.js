const menu = document.querySelector(".header__navbar");
const menuOpenBtn = document.querySelector(".menu-btn");
const menuCloseBtn = document.querySelector(".close-btn");

menuOpenBtn.addEventListener("click", () => {
  menu.classList.add("menu--open");
  menu.style.transition = "300ms ease-in-out";
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("menu--open");
});

window.addEventListener("resize", () => {
  menu.classList.remove("menu--open");
  menu.style.transition = "none";
});
