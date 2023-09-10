import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world!");

const swiper = new Swiper(".swiper", {
  spaceBetween: 24,
  slidesPerView: 3,

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  mousewheel: true,
});
