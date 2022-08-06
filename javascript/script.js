const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const progress_bar = document.getElementById("progress-bar");
const return_btn = document.getElementById("return-btn");
if (return_btn) {
  return_btn.onclick = () => (document.documentElement.scrollTop = 0);
}

// progress scroll bar logic
document.addEventListener("scroll", () => {
  if (!progress_bar) return;
  let percentage =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  progress_bar.style.width = percentage + "%";
});

setTimeout(async () => {
  let allanim = Array.from(document.querySelectorAll(".anim"));
  for (let i = 0; i < allanim.length; i++) {
    allanim[i].style.transform = "translate(0)";
    allanim[i].style.opacity = "1";
    // check if got contact
    if (window.location.href.toLowerCase().includes("contact")) {
      await sleep(70);
    } else {
      await sleep(150);
    }
  }
}, 200);

const parallax = document.querySelector(".nice-section");

// parallex effect
window.addEventListener("scroll", function () {
  if (!parallax) return;
  if (window.innerWidth <= 990) return;
  let offset = window.pageYOffset;
  // parallax.style.backgroundPositionY = offset * -0.8 + "px" + "!important";
  parallax.style.setProperty(
    "background-position-y",
    offset * -0.8 + "px",
    "important"
  );
});

// return to top button
window.onscroll = () => {
  if (!return_btn) return;
  if (window.innerWidth <= 990) return;
  let percentage =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  if (window.scrollY > 100) {
    return_btn.style.display = "flex";
  } else {
    return_btn.style.display = "none";
  }
  return_btn.style.background = `conic-gradient(#20374C ${percentage}%, #55A0E9 ${percentage}%)`;
};

// delay logo
const delay = (URL) => {
  if (window.innerWidth <= 990) {
    setTimeout(() => {
      window.location.href = URL;
    }, 500);
  } else {
    window.location.href = URL;
  }
};
