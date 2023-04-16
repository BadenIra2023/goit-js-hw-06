function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body")
const color = document.querySelector(".change-color")
const ssss = document.querySelector(".color")
console.log(color)
console.dir(ssss)
color.addEventListener("click", getColor);
function getColor(event) {

ssss.textContent = getRandomHexColor();
body.style.backgroundColor = ssss.textContent;
  
}