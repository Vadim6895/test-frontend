const nav = document.querySelector(`.main-nav`);
const navHeight = nav.offsetHeight;
const body = document.querySelector(`.body`);
const cartForm = document.querySelector(`.cart`);

document.addEventListener(`scroll`, function () {
  var scroll = window.scrollY;
  if (scroll > 1) {
    nav.classList.add(`main-nav--fixed`);
    cartForm.style.zIndex = '0';
  } else {
    nav.classList.remove(`main-nav--fixed`);
  }
});
