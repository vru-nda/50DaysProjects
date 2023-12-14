const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

open_btn.addEventListener("click", (e) => {
  nav.forEach((navEle) => {
    navEle.classList.add("visible");
  });
});

close_btn.addEventListener("click", (e) => {
  nav.forEach((navEle) => {
    navEle.classList.remove("visible");
  });
});
