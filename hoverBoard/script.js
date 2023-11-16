const container = document.getElementById("container");

const COLORS = [
  "#B32821",
  "#3F888F",
  "#592321",
  "#8E402A",
  "#343E40",
  "#025669",
  "#317F43",
  "#D84B20",
];

const SQUARES = 400;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseout", () => removeColor(square));
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}
