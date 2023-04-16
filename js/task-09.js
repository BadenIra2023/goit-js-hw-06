function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body")
const changeColor = document.querySelector(".change-color")
const color = document.querySelector(".color")

changeColor.addEventListener("click", getColor);
function getColor(event) {

color.textContent = getRandomHexColor();
body.style.backgroundColor = color.textContent;
  
}