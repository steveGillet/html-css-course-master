const btnNavEle = document.querySelector(".btn-mobile-nav");
const headerEle = document.querySelector(".header");

btnNavEle.addEventListener("click", () => {
  headerEle.classList.toggle("nav-open");
});
