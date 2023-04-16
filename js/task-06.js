const textInput = document.getElementById("validation-input")
const numLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
  console.log(textInput.value.length)
  if (textInput.value.length === numLength) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
  else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  };
});