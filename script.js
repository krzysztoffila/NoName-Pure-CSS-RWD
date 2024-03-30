document.addEventListener('DOMContentLoaded', function () {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const mobileMenu = document.querySelector('.navigation__mobile--menu');

  hamburgerIcon.addEventListener('click', function () {
    mobileMenu.classList.toggle('open'); // Dodaj lub usuń klasę open, aby pokazać lub ukryć menu hamburgerowe
  });
});