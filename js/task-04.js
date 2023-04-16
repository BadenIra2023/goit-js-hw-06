const buttonDecrement = document.querySelector("#counter button");
const buttonIncrement = document.querySelector("#value").nextElementSibling;
const valueEl = document.querySelector("#value");

let counterValue = 0; 
buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;});
    
buttonIncrement.addEventListener("click", () => {
    counterValue += 1
    valueEl.textContent = counterValue;});