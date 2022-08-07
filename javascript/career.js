// increase contrast of navbar once it goes down to the content section

const nav_elt = document.querySelector("nav");
const scroll_down_elt = document.querySelector("#scroll-down");
document.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight) {
    nav_elt.classList.add("navbar-dark");
    nav_elt.classList.add("bg-dark");
  } else {
    nav_elt.classList.remove("navbar-dark");
    nav_elt.classList.remove("bg-dark");
  }
});

scroll_down_elt.onclick = () => {
  window.scrollTo(0, document.getElementById("career-section").offsetTop - 80);
};
