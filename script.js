"use strict";
// Smooth scrolling
const introSection = document.querySelector(".intro");
const introLink = document.querySelector(".intro--link");
const keyPointsSection = document.querySelector(".key__points");
const keyPointsLink = document.querySelector(".key__points--link");
const statsSection = document.querySelector(".stats");
const statsLink = document.querySelector(".stats--link");
const featuresSection = document.querySelector(".features");
const featuresLink = document.querySelector(".features--link");
const authorsSection = document.querySelector(".authors");
const authorLink = document.querySelector(".authors--link");
const pricingSection = document.querySelector(".pricing");
const pricingLink = document.querySelector(".pricing--link");
introLink.addEventListener("click", (e) => {
  e.preventDefault();
  introSection.scrollIntoView({ behavior: "smooth" });
});
keyPointsLink.addEventListener("click", (e) => {
  e.preventDefault();
  keyPointsSection.scrollIntoView({ behavior: "smooth" });
});
statsLink.addEventListener("click", (e) => {
  e.preventDefault();
  statsSection.scrollIntoView({ behavior: "smooth" });
});
featuresLink.addEventListener("click", (e) => {
  e.preventDefault();
  featuresSection.scrollIntoView({ behavior: "smooth" });
});
authorLink.addEventListener("click", (e) => {
  e.preventDefault();
  authorsSection.scrollIntoView({ behavior: "smooth" });
});
pricingLink.addEventListener("click", (e) => {
  e.preventDefault();
  pricingSection.scrollIntoView({ behavior: "smooth" });
});
