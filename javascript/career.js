const nav_elt = document.querySelector("nav");
document.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight) {
    nav_elt.classList.add("navbar-dark");
    nav_elt.classList.add("bg-dark");
  } else {
    nav_elt.classList.remove("navbar-dark");
    nav_elt.classList.remove("bg-dark");
  }
});
