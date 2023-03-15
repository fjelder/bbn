function stickyNavbar() {
  // ======= Sticky
  console.log("init sticky");
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    console.log(sticky);
    const logo = document.querySelector(".header-logo");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }
  };
}

export { stickyNavbar };
