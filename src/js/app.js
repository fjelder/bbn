import Alpine from "alpinejs";
window.Alpine = Alpine;

Alpine.start();

import Swiper from "swiper";

window.Swiper = Swiper;

import { darkMode, checkDarkMode, directScroll } from "./test";

// console.log("test");

darkMode();
document.addEventListener("DOMContentLoaded", function () {
  checkDarkMode();
});
