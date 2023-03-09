import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

import { test, test2 } from "./test";

console.log("test");

document.addEventListener("DOMContentLoaded", function () {
  test();
  test2();
});
