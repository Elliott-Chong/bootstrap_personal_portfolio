const IDENTITY = ["Student.", "Learner.", "Leader.", "Athlete."];
let index = 1;
const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const typewriter = document.getElementById("typewriter-dynamic");

setInterval(() => {
  document.getElementById("turi").play();
  alert("TURI IP IPPPPPPPPPPPPPPP");
}, 100);

const initTypewriter = async (text) => {
  typewriter.classList.remove("typewrite");
  typewriter.innerText = "";
  typewriter.innerText = text;
  const length = text.length;
  typewriter.style.setProperty("--length", length);
  await sleep(50);
  typewriter.classList.add("typewrite");
};

initTypewriter("a Student.");
typewriter.addEventListener("animationend", async (e) => {
  if (e.animationName !== "typewrite") return;
  if (e.pseudoElement !== "::before") return;
  if (index == IDENTITY.length) {
    index = 0;
  }
  const newText = ["a", "e", "i", "o", "u"].includes(
    IDENTITY[index][0].toLowerCase()
  )
    ? `an ${IDENTITY[index]}`
    : `a ${IDENTITY[index]}`;
  await sleep(1000);
  await initTypewriter(newText);
  index++;
});
