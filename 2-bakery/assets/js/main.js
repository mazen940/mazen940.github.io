// show menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
// Remove menu mobile
const navLink = document.querySelectorAll(".nav--link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
// add blur header
const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

// show scroll up
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// scroll selection active link
const sections = document.querySelectorAll("section[id]");

const scrollActivate = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav--menu a[href*=" + sectionId + "]"
      );
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActivate);

// scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  opacity: 1,
  scale: 1.1,
  duration: 2500,
  delay: 300,
  reset: true,
});
sr.reveal(`.home--data, .about--img, .about--data, .visit--data`);

sr.reveal(`.home--image, .footer--img-1, .footer--img-2`, {
  rotate: { z: -15 },
});
sr.reveal(`.home--bread, .about--bread`, { rotate: { z: 15 } });

sr.reveal(`.home--footer`, { scal: 1, origin: `bottom` });
sr.reveal(`.new--card:nth-child(1) img`, { rotate: { z: -30 }, distance: 0 });
sr.reveal(`.new--card:nth-child(2) img`, {
  rotate: { z: 15 },
  distance: 0,
  delay: 600,
});
sr.reveal(`.new--card:nth-child(3) img`, {
  rotate: { z: -30 },
  distance: 0,
  delay: 900,
});

sr.reveal(`.favorite--card img`, {
  interval: 100,
  rotate: { z: 15 },
  distance: 0,
});

sr.reveal(`.footer--container`, { scale: 1 });
