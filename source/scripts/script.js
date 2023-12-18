let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");

const sliderListElement = document.querySelector(".cat-result__list");
const sliderControlElement = document.querySelector(".cat-result__control");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

if (sliderControlElement) {
  let flag = false;
  sliderControlElement.addEventListener("click", function () {
    if (flag) {
      sliderListElement.classList.toggle("cat-result__list--after");
      sliderListElement.classList.toggle("cat-result__list--before");
    } else {
      sliderListElement.classList.add("cat-result__list--after");
      flag = true;
    }
  });
}
