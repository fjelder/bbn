const test = function () {
  console.log("test1");
};

function test2() {
  console.log("test2");
}

function checkDarkMode() {
  console.log("check mode #" + localStorage.getItem("color-theme"));
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
function darkMode() {
  var themeToggleDarkIcon = document.getElementsByClassName(
    "theme-toggle-dark-icon"
  );
  var themeToggleLightIcon = document.getElementsByClassName(
    "theme-toggle-light-icon"
  );
  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    for (let i = 0; i < themeToggleLightIcon.length; i++) {
      themeToggleLightIcon[i].classList.remove("hidden");
    }
  } else {
    for (let i = 0; i < themeToggleDarkIcon.length; i++) {
      themeToggleDarkIcon[i].classList.remove("hidden");
    }
  }

  // var themeToggleBtn = document.getElementById("theme-toggle");

  var themeToggleBtn = document.getElementsByClassName("theme-toggle");

  for (let i = 0; i < themeToggleBtn.length; i++) {
    themeToggleBtn[i].addEventListener("click", function () {
      console.log("Change theme with: " + i + " button");
      themeToggleDarkIcon[i].classList.toggle("hidden");
      themeToggleLightIcon[i].classList.toggle("hidden");

      // if set via local storage previously
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    });
  }
}

function directScroll() {
  window.onscroll = function (e) {
    // print "false" if direction is down and "true" if up
    console.log(this.oldScroll > this.scrollY);
    this.oldScroll = this.scrollY;
  };
}
export { darkMode, checkDarkMode, directScroll };
