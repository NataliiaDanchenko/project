const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".burger");
const navLinks = document.querySelector(".header__nav-list");

btnSub.addEventListener("click", () => {
  body.classList.toggle("overflow-hidden");
  header.classList.toggle("nav-visible");
})

// navLinks.addEventListener("click", () => {
//   body.classList.remove("overflow-hidden");
//   header.classList.remove("nav-visible");
// })