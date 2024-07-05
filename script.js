"use strict";

// Smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
  const sections = {
    ".intro--link": ".intro",
    ".key__points--link": ".key__points",
    ".stats--link": ".stats",
    ".features--link": ".features",
    ".authors--link": ".authors",
    ".pricing--link": ".pricing",
  };

  Object.keys(sections).forEach((linkSelector) => {
    const link = document.querySelector(linkSelector);
    const section = document.querySelector(sections[linkSelector]);

    if (link && section) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        section.scrollIntoView({ behavior: "smooth" });
      });
    }
  });
});
