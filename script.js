document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const menuLinks = document.querySelector(".menu-links");
  console.log('clicked');
  hamburgerMenu.addEventListener("click", function () {
    menuLinks.classList.toggle("active");
  });
});