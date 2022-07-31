const progress_bar = document.getElementById("progress-bar");

// progress scroll bar logic
document.addEventListener("scroll", () => {
  let percentage =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  progress_bar.style.width = percentage + "%";
});

setTimeout(() => {
  document.querySelectorAll(".anim").forEach((elt) => {
    elt.style.transform = "translate(0)";
    elt.style.opacity = "1";
  });
}, 200);
