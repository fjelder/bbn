import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

import { darkMode, checkDarkMode } from "./test";

// console.log("test");

darkMode();
document.addEventListener("DOMContentLoaded", function () {
  checkDarkMode();
});
