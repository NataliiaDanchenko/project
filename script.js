const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".burger");
const navLinks = document.querySelector(".header__nav-list");

btnSub.addEventListener("click", () => {
  body.classList.toggle("overflow-hidden");
  header.classList.toggle("nav-visible");
})



//window.addEventListener('resize', changeSize);

// function changeSize() {
//   if (window.innerWidth >= 1000) {
//     fastestImg.innerHTML = '<img src="img/fastest-laptop-big.png" alt="laptop">';
//     console.log('kkkk')
//   }
// }
// window.addEventListener('resize', (e) => {
//   console.log(e);
// });
