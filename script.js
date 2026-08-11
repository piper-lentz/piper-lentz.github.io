// Highlights the active section in the catalog index as the user scrolls.
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".catalog-index a");

const setActive = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.sec === id);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  },
  { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
);

sections.forEach((section) => observer.observe(section));
