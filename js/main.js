// Form Validate
let inputdiv = document.querySelector(".input");
let inputChecker = document.querySelector(".input input");
let btnChecker = document.querySelector(".form-btn");
let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

btnChecker.addEventListener("click", (event) => {
  inputdiv.classList.remove("active");
  if(inputChecker.value === "") {
    event.preventDefault();
  }
  if(reg.test(inputChecker.value) === false) {
    inputdiv.classList.add("active");
    inputChecker.value = "example@gmail\\com";
  }
  if(reg.test(inputChecker.value) === true) {
    inputdiv.classList.remove("active");
  }
});
// Form Validate

// Filter
let shuffles = document.querySelectorAll(".shuffle");
let shuffleLis = document.querySelectorAll(".list-shuffle ul li");
for(let i = 0;i < shuffles.length;i++) {
  shuffles[i].setAttribute("data-index", i);
  shuffleLis[i].setAttribute("data-index", i);
}

shuffleLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    shuffleLis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    shuffles.forEach((shuffle) => {
      shuffle.classList.remove("active");
      if(e.currentTarget.dataset.index === shuffle.getAttribute("data-index")) {
        e.currentTarget.classList.add("active");
        shuffle.classList.add("active");
      }
    });
  });
});
// Filter

// Asks Section
let Asks = document.querySelectorAll(".quest-answ");
let iconOpen = document.querySelectorAll(".arrow-open");
let asksLength = Asks.length;

for(let i = 0;i < Asks.length;i++) {
  Asks[i].setAttribute("data-num", i);
  iconOpen[i].setAttribute("data-num", i);
}

Asks.forEach((ask) => {
  ask.classList.remove("active");
  iconOpen.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      if(event.currentTarget.dataset.num === ask.getAttribute("data-num")) {
        ask.classList.toggle("active");
      }
    });
  });
});
// Asks Section

// Navbar Full Screen
let btn = document.querySelector(".toggler");
let btnClose = document.querySelector(".close");
let navbar = document.querySelector("nav");

btn.addEventListener("click", () => {
  navbar.classList.add("open");
});
btnClose.addEventListener("click", () => {
  navbar.classList.remove("open");
});
// Navbar Full Screen
