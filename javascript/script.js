let progress_bar = document.getElementById("progress-bar");

document.addEventListener("scroll", (e) => {
  let percentage =
    (window.scrollY / document.documentElement.scrollHeight) * 100;
  progress_bar.style.width = percentage + "%";
});
