const burger = document.querySelector(".menu__burger");
const nav = document.querySelector(".menu__options");
const conatiner = document.querySelector(".container");
burger.addEventListener("click", () => {
  nav.style.transform = "translateX(0)";
  nav.style.opacity = "1";
  conatiner.style.position = "fixed";
});
window.onresize = () => {
  nav.style.transition = "0";
};
