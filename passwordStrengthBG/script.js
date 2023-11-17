const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", () => {
  background.style.filter = `blur(${20 - password.value.length * 2}px)`;
});
