import Alpine from "alpinejs";
window.Alpine = Alpine;

Alpine.start();

import Swiper from "swiper";

window.Swiper = Swiper;

import { darkMode, checkDarkMode, directScroll } from "./test";

darkMode();

document.addEventListener("DOMContentLoaded", function () {
  checkDarkMode();
});

(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector(".header-logo");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    // === logo change
    if (ud_header.classList.contains("sticky")) {
      logo.src = "images/logo/logo.svg";
    } else {
      logo.src = "images/logo/logo-white.svg";
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };
})();
